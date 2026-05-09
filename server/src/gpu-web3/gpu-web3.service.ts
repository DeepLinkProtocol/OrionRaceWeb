// src/blockchain/blockchain.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ethers } from 'ethers';
import * as stakingContractAbi from './abi/stakingContractAbi.json'; // 加载 ABI
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GpuMachine } from '../gpu-machine/gpu.schema';
// import axios, { AxiosResponse } from 'axios';

@Injectable()
export class GpuWeb3Service {
  private provider: ethers.JsonRpcProvider;
  private contract: ethers.Contract;
  private signer: ethers.Wallet;

  constructor(
    private configService: ConfigService,
    @InjectModel(GpuMachine.name) private MachineModel: Model<GpuMachine>,
  ) {
    const env = this.configService.get<string>('NODE_ENV', 'test');

    const rpcUrl = 'https://rpc.dbcwallet.io';

    this.provider = new ethers.JsonRpcProvider(rpcUrl);

    // 读取私钥（建议从环境变量中获取）
    const privateKey =
      '4edcc831171df477093ae0f34b3141bbab9b6ac76bd95776793ef5129a3b266a';
    if (!privateKey) {
      throw new Error('Private key is missing in environment variables');
    }

    // 使用私钥创建 signer
    this.signer = new ethers.Wallet(privateKey, this.provider);

    const contractAddress = this.configService.get<string>(
      env === 'production'
        ? 'GPU_MACHINE_CONTRACT_ADDRESS_PROD'
        : 'GPU_MACHINE_CONTRACT_ADDRESS_TEST',
    );

    console.log(`环境: ${env}`);
    console.log(`RPC URL: ${rpcUrl}`);
    console.log(`带宽质押合约地址: ${contractAddress}`);

    this.contract = new ethers.Contract(
      contractAddress,
      stakingContractAbi,
      this.signer, // 使用 signer 进行写操作
    );
  }

  // 调用 getMachineInfoForDBCScan 方法
  async getMachineInfoForDBCScan(machineId: string): Promise<any> {
    try {
      // 调用合约方法
      console.log(machineId, '拿到的机器ID');
      const result = await this.contract.getMachineInfoForDBCScan(machineId);
      console.log('合约返回原始数据:', result);

      // 格式化返回数据，根据结构体字段
      return {
        isStaking: result.isStaking, // bool
        region: result.region, // string
        hdd: Number(result.hdd), // uint256 转换为 number
        bandwidth: Number(result.bandwidth), // uint256 转换为 number
        mem: Number(result.mem), // uint256 转换为 number (单位: G)
        cpuCors: Number(result.cpuCors), // uint256 转换为 number
        projectName: result.projectName, // string
        totalRewardAmount: ethers.formatEther(result.totalRewardAmount), // uint256 转换为字符串 (假设 18 位小数)
        claimedRewardAmount: ethers.formatEther(result.claimedRewardAmount), // uint256 转换为字符串
        lockedRewardAmount: ethers.formatEther(result.lockedRewardAmount), // uint256 转换为字符串
      };
    } catch (error) {
      console.error('调用合约失败:', error);
      throw new Error(`Failed to fetch machine info: ${error.message}`);
    }
  }
}
