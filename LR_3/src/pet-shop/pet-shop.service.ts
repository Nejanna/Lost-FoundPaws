import { Injectable } from '@nestjs/common';
import { Pets, Users } from './dto/create-pet-shop.dto';
import { UpdatePets, UpdateUsers } from './dto/update-pet-shop.dto';
import { PetsException } from '../pet-shop/exception/note.exception/pet.exception';
import { uuid } from 'uuidv4';

@Injectable()
export class PetsService {
  private pets: Pets[] = [];

  createPet(createPet: Pets): Pets {
    createPet.Pet_id = uuid();
    this.pets.push(createPet);
    return createPet;
  }

  findAllPets() {
    if (this.pets.length == 0) {
      throw new PetsException('There are no pets');
    }
    return this.pets;
  }

  findOnePet(id: string) {
    for (const item of this.pets) {
      if (item.Pet_id == id) return item;
      throw new PetsException('Such id does not exist');
    }
  }

  updatePet(id: string, updatePets: UpdatePets): void {
    //const newPets: UpdatePetShopDto[] = this.pets.filter((c) => c.id !== id);
    const pid = this.pets.findIndex((p) => p.Pet_id == id);
    this.pets[pid] = {
      ...this.pets[pid],
      ...updatePets,
    };
    // newPets.push({
    //   id: id,
    //   ...updatePetShopDto,
    // });
    // this.pets = newPets;
  }

  // update(Name: string,Sex: string, updatePetShopDto: UpdatePetShopDto): void {
  //   const newPets: UpdatePetShopDto[] = this.pets.filter((c) => c.id !== id);

  //   newPets.push({
  //     id: id,
  //     ...updatePetShopDto,
  //   });
  //   this.pets = newPets;
  // }

  removePet(id: string) {
    const result: Pets[] = this.pets.filter((c) => c.Pet_id !== id);
    if (result.length === this.pets.length) {
      throw new PetsException('Such id does now exist');
    }

    this.pets = result;
  }
}
@Injectable()
export class UsersServise {
  private users: Users[] = [];

  createUser(createUser: Users): Users {
    createUser.User_id = uuid();
    this.users.push(createUser);
    return createUser;
  }

  findAllUsers() {
    if (this.users.length == 0) {
      throw new PetsException('There are no users');
    }
    return this.users;
  }

  findOneUser(id: string) {
    for (const item of this.users) {
      if (item.User_id == id) return item;
      throw new PetsException('Such id does not exist');
    }
  }

  updateUser(id: string, updateUsers: UpdateUsers): void {
    const pid = this.users.findIndex((p) => p.User_id == id);
    this.users[pid] = {
      ...this.users[pid],
      ...updateUsers,
    };
  }

  removeUser(id: string) {
    const result: Users[] = this.users.filter((c) => c.User_id !== id);
    if (result.length === this.users.length) {
      throw new PetsException('Such id does now exist');
    }
    this.users = result;
  }
}
