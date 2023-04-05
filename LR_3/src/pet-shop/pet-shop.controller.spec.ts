import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pet-shop.controller';
import { PetsService } from './pet-shop.service';

describe('PetShopController', () => {
  let controller: PetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [PetsService],
    }).compile();

    controller = module.get<PetsController>(PetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
