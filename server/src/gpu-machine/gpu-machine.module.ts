// gpu-machine/gpu-machine.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { GpuMachineService } from './gpu-machine.service';
import { GpuMachineController } from './gpu-machine.controller';
import { GpuMachine, GpuMachineSchema } from './gpu.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GpuWeb3Module } from '../gpu-web3/gpu-web3.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GpuMachine.name, schema: GpuMachineSchema },
    ]),
    forwardRef(() => GpuWeb3Module), // 导入 GpuWeb3Module 并使用 forwardRef
  ],
  controllers: [GpuMachineController],
  providers: [GpuMachineService],
  exports: [MongooseModule],
})
export class GpuMachineModule {}
