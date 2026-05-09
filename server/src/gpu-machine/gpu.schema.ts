// gpu-machine/gpu.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class GpuMachine extends Document {
  @Prop({ required: true, unique: true })
  machineId: string;

  @Prop({ required: true })
  walletAddress: string;

  // // 合约返回的字段
  // @Prop({ type: Boolean, default: false })
  // isStaking: boolean;

  // @Prop({ type: String })
  // region: string;

  // @Prop({ type: Number })
  // hdd: number;

  // @Prop({ type: Number })
  // bandwidth: number;

  // @Prop({ type: Number })
  // mem: number;

  // @Prop({ type: Number })
  // cpuCors: number;

  // @Prop({ type: String })
  // projectName: string;

  // @Prop({ type: String })
  // totalRewardAmount: string;

  // @Prop({ type: String })
  // claimedRewardAmount: string;

  // @Prop({ type: String })
  // lockedRewardAmount: string;
}

export const GpuMachineSchema = SchemaFactory.createForClass(GpuMachine);
