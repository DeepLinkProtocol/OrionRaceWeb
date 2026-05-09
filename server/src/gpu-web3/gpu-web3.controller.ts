import { Controller } from '@nestjs/common';
import { GpuWeb3Service } from './gpu-web3.service';

@Controller('gpu-web3')
export class GpuWeb3Controller {
  constructor(private readonly gpuWeb3Service: GpuWeb3Service) {}
}
