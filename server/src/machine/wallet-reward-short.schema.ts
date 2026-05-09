import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WalletRewardShort extends Document {
  @Prop({ required: true, unique: true })
  walletAddress: string;

  @Prop()
  lockedReward: string;

  @Prop()
  updatedAt: Date;
}

export const WalletRewardShortSchema =
  SchemaFactory.createForClass(WalletRewardShort);
