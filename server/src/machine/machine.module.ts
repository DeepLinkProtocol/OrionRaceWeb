import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { Machine, MachineSchema } from './machine.schema';
import { BlockchainModule } from '../BlockchainService/blockchain.module'; // 导入 BlockchainModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
    BlockchainModule, // 添加这一行
  ],
  controllers: [MachineController],
  providers: [MachineService],
})
export class MachineModule {}
