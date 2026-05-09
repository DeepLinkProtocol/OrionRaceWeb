import { PartialType } from '@nestjs/mapped-types';
import { CreateGpuMachineDto } from './create-gpu-machine.dto';

export class UpdateGpuMachineDto extends PartialType(CreateGpuMachineDto) {}
