import { Test, TestingModule } from '@nestjs/testing';
import { GpuMachineController } from './gpu-machine.controller';
import { GpuMachineService } from './gpu-machine.service';

describe('GpuMachineController', () => {
  let controller: GpuMachineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpuMachineController],
      providers: [GpuMachineService],
    }).compile();

    controller = module.get<GpuMachineController>(GpuMachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
