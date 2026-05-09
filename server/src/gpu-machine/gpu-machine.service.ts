import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GpuMachine } from './gpu.schema';
import { CreateGpuMachineDto } from './dto/create-gpu-machine.dto';
import { GpuWeb3Service } from '../gpu-web3/gpu-web3.service';

@Injectable()
export class GpuMachineService {
  constructor(
    @InjectModel(GpuMachine.name) private gpuMachineModel: Model<GpuMachine>,
    private readonly blockchainService: GpuWeb3Service,
  ) {}

  async create(createGpuMachineDto: CreateGpuMachineDto): Promise<any> {
    try {
      const { machineId, walletAddress } = createGpuMachineDto;
      const newGpuMachine = new this.gpuMachineModel({
        machineId,
        walletAddress,
      });
      const savedMachine = await newGpuMachine.save();
      return {
        code: 1000,
        msg: 'Machine created successfully',
        data: savedMachine,
      };
    } catch (error) {
      return {
        code: 1001,
        msg: `Failed to create machine: ${error.message}`,
        data: null,
      };
    }
  }

  async findByWalletAddress(walletAddress: string): Promise<any> {
    try {
      const machines = await this.gpuMachineModel
        .find({ walletAddress })
        .select('machineId')
        .exec();

      if (!machines.length) {
        return {
          code: 1000,
          msg: 'Machines retrieved successfully', // 与旧版保持一致
          data: [],
        };
      }

      const machineIds = machines.map((m) => m.machineId);
      const machineInfos = await Promise.all(
        machineIds.map(async (machineId) => {
          const info =
            await this.blockchainService.getMachineInfoForDBCScan(machineId);
          return {
            machineId, // 添加 machineId
            walletAddress, // 添加 walletAddress
            ...info, // 展开合约返回的字段
          };
        }),
      );

      return {
        code: 1000,
        msg: 'Machines retrieved successfully',
        data: machineInfos,
      };
    } catch (error) {
      return {
        code: 1001,
        msg: `Failed to retrieve machines: ${error.message}`,
        data: [],
      };
    }
  }

  async deleteByWalletAddress(walletAddress: string): Promise<any> {
    try {
      const result = await this.gpuMachineModel
        .deleteMany({ walletAddress })
        .exec();
      return {
        code: 1000,
        msg: `Deleted ${result.deletedCount} machines for wallet ${walletAddress}`,
        data: { deletedCount: result.deletedCount },
      };
    } catch (error) {
      return {
        code: 1001,
        msg: `Failed to delete machines: ${error.message}`,
        data: { deletedCount: 0 },
      };
    }
  }

  async deleteByMachineId(machineId: string): Promise<any> {
    try {
      console.log(machineId, 'LLLL');
      const result = await this.gpuMachineModel.deleteOne({ machineId }).exec();
      if (result.deletedCount === 0) {
        return {
          code: 1002,
          msg: `No machine found with machineId ${machineId}`,
          data: { deletedCount: 0 },
        };
      }
      return {
        code: 1000,
        msg: `Machine with machineId ${machineId} deleted successfully`,
        data: { deletedCount: result.deletedCount },
      };
    } catch (error) {
      return {
        code: 1001,
        msg: `Failed to delete machine: ${error.message}`,
        data: { deletedCount: 0 },
      };
    }
  }
}
