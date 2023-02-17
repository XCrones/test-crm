import { Test, TestingModule } from '@nestjs/testing';
import { EssensesService } from './essences.service';

describe('EssensesService', () => {
  let service: EssensesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EssensesService],
    }).compile();

    service = module.get<EssensesService>(EssensesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
