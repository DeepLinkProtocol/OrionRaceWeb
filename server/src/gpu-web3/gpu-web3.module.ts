// gpu-web3/gpu-web3.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { GpuWeb3Service } from './gpu-web3.service';
import { GpuWeb3Controller } from './gpu-web3.controller';
import { GpuMachineModule } from '../gpu-machine/gpu-machine.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    forwardRef(() => GpuMachineModule), // 使用 forwardRef 处理循环依赖
  ],
  controllers: [GpuWeb3Controller],
  providers: [GpuWeb3Service],
  exports: [GpuWeb3Service],
})
export class GpuWeb3Module {}
