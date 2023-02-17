import { Test, TestingModule } from '@nestjs/testing';
import { EssensesController } from './essences.controller';

describe('EssensesController', () => {
  let controller: EssensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EssensesController],
    }).compile();

    controller = module.get<EssensesController>(EssensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
