// src/cats/cat.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// 定义嵌套的 MachineInfo 子 Schema
@Schema()
export class MachineInfo {
  @Prop({ required: false, default: false })
  isStaking: boolean;

  @Prop({ required: false })
  gpuType: string;

  @Prop({ required: false, type: Number, min: 0, max: 255 }) // uint8 范围 0-255
  gpuCount: number;

  @Prop({ required: false, type: Number }) // uint256 用 Number 表示
  mem: number;

  @Prop({ required: false })
  projectName: string;

  @Prop({ required: false, type: String }) // uint256 用 String 表示大整数
  totalRewardAmount: string;

  @Prop({ required: false, type: String }) // uint256 用 String 表示大整数
  claimedRewardAmount: string;

  @Prop({ required: false, type: String }) // uint256 用 String 表示大整数
  lockedRewardAmount: string;
}

@Schema()
export class Machine extends Document {
  // 钱包地址
  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true }) // machineId 唯一且必填
  machineId: string;

  @Prop({ required: false }) // 节点数量，限制 1-20
  numberOfNodes: number;

  @Prop({ required: false }) // 链上租赁 ID
  rentalMachineId: string;

  // 嵌套的 MachineInfo 对象
  @Prop({ type: MachineInfo, required: false })
  machineInfo: MachineInfo;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);
