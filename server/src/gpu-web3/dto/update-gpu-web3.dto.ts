import { PartialType } from '@nestjs/mapped-types';
import { CreateGpuWeb3Dto } from './create-gpu-web3.dto';

export class UpdateGpuWeb3Dto extends PartialType(CreateGpuWeb3Dto) {}
