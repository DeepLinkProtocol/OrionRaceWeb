import { Test, TestingModule } from '@nestjs/testing';
import { GpuWeb3Service } from './gpu-web3.service';

describe('GpuWeb3Service', () => {
  let service: GpuWeb3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpuWeb3Service],
    }).compile();

    service = module.get<GpuWeb3Service>(GpuWeb3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
