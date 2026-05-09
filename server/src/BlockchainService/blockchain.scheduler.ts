// src/blockchain/blockchain.scheduler.ts
import { Injectable, Logger } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { BlockchainService } from './blockchain.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine } from '../machine/machine.schema';

@Injectable()
export class BlockchainScheduler {
  private readonly logger = new Logger(BlockchainScheduler.name);

  constructor(
    private readonly blockchainService: BlockchainService,
    @InjectModel(Machine.name) private readonly MachineModel: Model<Machine>,
  ) {}

  // 加在类里作为状态标志
  private isUnstaking = false;

  // 每 10 分钟执行一次 getMachineInfoForDBCScanAndUnstake 任务
  @Interval(10000) // 600000 毫秒 = 10 分钟
  async handleScanAndUnstakeTask() {
    if (this.isUnstaking) {
      this.logger.warn('解除质押任务仍在执行中，跳过本轮');
      return;
    }
    this.isUnstaking = true;
    this.logger.log('开始执行扫描并自动解除质押任务');
    try {
      const result =
        await this.blockchainService.getMachineInfoForDBCScanAndUnstake();
      this.logger.log(`扫描并解除质押结果: ${JSON.stringify(result)}`);
    } catch (error) {
      this.logger.error('扫描并自动解除质押任务失败', error.stack);
    } finally {
      this.isUnstaking = false;
    }
  }

  // 状态标志：锁定奖励同步任务--长租
  private isSyncingLockedReward = false;
  // 每 10 分钟同步锁定奖励
  @Interval(6000)
  async handleSyncLockedRewardTask() {
    if (this.isSyncingLockedReward) {
      this.logger.warn('锁定奖励同步仍在执行中，跳过本轮');
      return;
    }
    this.isSyncingLockedReward = true;
    this.logger.log('开始执行锁定奖励同步任务');
    try {
      await this.blockchainService.syncLockedRewardToDatabase();
      this.logger.log('锁定奖励同步任务完成');
    } catch (error) {
      this.logger.error('锁定奖励同步任务失败', error.stack);
    } finally {
      this.isSyncingLockedReward = false;
    }
  }

  // 状态标志：锁定奖励同步任务--短租
  private isSyncingLockedReward2 = false;
  // 每 10 分钟同步锁定奖励
  @Interval(6000)
  async handleSyncLockedRewardTask2() {
    if (this.isSyncingLockedReward2) {
      this.logger.warn('锁定奖励同步仍在执行中，跳过本轮');
      return;
    }
    this.isSyncingLockedReward2 = true;
    this.logger.log('开始执行锁定奖励同步任务');
    try {
      await this.blockchainService.syncLockedRewardToDatabaseShort();
      this.logger.log('锁定奖励同步任务完成');
    } catch (error) {
      this.logger.error('锁定奖励同步任务失败', error.stack);
    } finally {
      this.isSyncingLockedReward2 = false;
    }
  }
}
