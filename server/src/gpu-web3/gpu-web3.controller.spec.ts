import { Test, TestingModule } from '@nestjs/testing';
import { GpuWeb3Controller } from './gpu-web3.controller';
import { GpuWeb3Service } from './gpu-web3.service';

describe('GpuWeb3Controller', () => {
  let controller: GpuWeb3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpuWeb3Controller],
      providers: [GpuWeb3Service],
    }).compile();

    controller = module.get<GpuWeb3Controller>(GpuWeb3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
