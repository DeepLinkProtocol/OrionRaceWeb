// src/blockchain/blockchain.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlockchainService } from './blockchain.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Machine, MachineSchema } from '../machine/machine.schema';
import { BlockchainScheduler } from './blockchain.scheduler';
import {
  WalletReward,
  WalletRewardSchema,
} from '../machine/wallet-reward.schema';
import {
  WalletRewardShort,
  WalletRewardShortSchema,
} from '../machine/wallet-reward-short.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Machine.name, schema: MachineSchema },
      { name: WalletReward.name, schema: WalletRewardSchema },
      // 新增短租模型
      { name: WalletRewardShort.name, schema: WalletRewardShortSchema },
    ]),
    ConfigModule, // 添加 ConfigModule
  ],
  providers: [BlockchainService, BlockchainScheduler],
  exports: [BlockchainService],
})
export class BlockchainModule {}
