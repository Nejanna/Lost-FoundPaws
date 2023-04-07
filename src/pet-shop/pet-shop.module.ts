import { Module } from '@nestjs/common';
import { PetsService } from './pet-shop.service';
import { PetsController } from './pet-shop.controller';
import Animal from './entities/pet-shop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetShopModule { }
