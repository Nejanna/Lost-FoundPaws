import { Module } from '@nestjs/common';
import { PetsService, UsersServise } from './pet-shop.service';
import { PetsController } from './pet-shop.controller';

@Module({
  controllers: [PetsController],
  providers: [PetsService, UsersServise],
})
export class PetShopModule { }
