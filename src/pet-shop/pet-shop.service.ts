import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Pets } from './dto/create-pet-shop.dto';
import { UpdatePets } from './dto/update-pet-shop.dto';
import Animal from './entities/pet-shop.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Animal)
    private animalsRepository: Repository<Animal>,
  ) { }

  async createPet(Animal: Pets) {
    const newAnimal = await this.animalsRepository.create(Animal);
    await this.animalsRepository.save(newAnimal);
    return newAnimal;
  }

  findAllPets() {
    return this.animalsRepository.find();
  }

  async findOnePet(id: number) {
    const animal = await this.animalsRepository.findOne({
      where: { id },
    });
    if (animal) {
      return animal;
    }
    throw new HttpException('Animal not found', HttpStatus.NOT_FOUND);
  }

  async updatePet(id: number, Animal: UpdatePets) {
    await this.animalsRepository.update(id, Animal);
    const updatedAnimal = await this.animalsRepository.findOne({
      where: { id },
    });
    if (updatedAnimal) {
      return updatedAnimal;
    }
    throw new HttpException('Animal not found', HttpStatus.NOT_FOUND);
  }

  async removePet(id: number) {
    const deleteResponse = await this.animalsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
  async removeAllPets() {
    const deleteResponse = await this.animalsRepository.delete({});
    if (!deleteResponse.affected) {
      throw new HttpException(
        'There are no pets in database',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
