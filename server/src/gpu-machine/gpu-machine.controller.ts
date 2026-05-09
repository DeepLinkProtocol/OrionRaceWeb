// gpu-machine/gpu-machine.controller.ts
import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { GpuMachineService } from './gpu-machine.service';
import { CreateGpuMachineDto } from './dto/create-gpu-machine.dto';

@Controller('gpu-machine')
export class GpuMachineController {
  constructor(private readonly gpuMachineService: GpuMachineService) {}

  @Post()
  async create(@Body() createGpuMachineDto: CreateGpuMachineDto) {
    return this.gpuMachineService.create(createGpuMachineDto);
  }

  @Get('wallet/:walletAddress')
  async findByWalletAddress(@Param('walletAddress') walletAddress: string) {
    return this.gpuMachineService.findByWalletAddress(walletAddress);
  }

  @Delete('wallet/:walletAddress')
  async deleteByWalletAddress(@Param('walletAddress') walletAddress: string) {
    return this.gpuMachineService.deleteByWalletAddress(walletAddress);
  }

  @Delete('machine/:machineId')
  async removeMachineByUniqueId(@Param('machineId') machineId: string) {
    return this.gpuMachineService.deleteByMachineId(machineId);
  }
}
