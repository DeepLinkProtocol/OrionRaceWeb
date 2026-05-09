import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post()
  create(@Body() createMachineDto) {
    return this.machineService.create(createMachineDto);
  }

  @Get()
  findAll(@Query('address') address: string) {
    return this.machineService.findAll(address);
  }

  @Delete('unStake')
  remove(@Query('id') id: string) {
    console.log(id, 'KKKKKKKKKKK');
    return this.machineService.remove(id);
  }
  // 删除所有数据
  @Delete()
  removeAll() {
    return this.machineService.removeAll();
  }

  @Get('userMashine/:mashineId')
  async getBalance(@Param('mashineId') address: string) {
    return this.machineService.getMachineBalance(address);
  }

  // 解除质押
  @Get('unStake')
  async unStake(@Query('mashineId') machineId: string) {
    console.log(machineId);
    return this.machineService.unStake(machineId);
  }
  // 查询所有钱包奖励-长租
  @Get('getAllWalletRewards')
  async getAllWalletRewards() {
    return await this.machineService.getAllWalletRewards();
  }
  // 查询所有钱包奖励-长租
  @Get('getAllWalletRewardsShort')
  async getAllWalletRewardsShort() {
    return await this.machineService.getAllWalletRewardsShort();
  }
  // 带宽之前的注册
  @Post('contractRegister')
  siginHandle() {
    return this.machineService.siginHandle();
  }

  // 带宽之前的注销
  @Post('contractUnregister')
  unregister(@Body() createMachineDto) {
    console.log(55);
    return this.machineService.unregister(createMachineDto);
  }

  // 查询全部机器判断是否到期自动解除质押
  @Get('getMachineTimeAndUnStake')
  async getMachineInfoForDBCScanAndUnstake() {
    return this.machineService.getMachineInfoForDBCScanAndUnstake();
  }

  // 进行续租
  @Post('renew')
  renew(@Body() createMachineDto) {
    return this.machineService.renew(createMachineDto);
  }
}
