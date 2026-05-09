import { Test, TestingModule } from '@nestjs/testing';
import { GpuMachineService } from './gpu-machine.service';

describe('GpuMachineService', () => {
  let service: GpuMachineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpuMachineService],
    }).compile();

    service = module.get<GpuMachineService>(GpuMachineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
