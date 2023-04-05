import { Pets, Users } from './dto/create-pet-shop.dto';
import { UpdatePets, UpdateUsers } from './dto/update-pet-shop.dto';
export declare class PetsService {
    private pets;
    createPet(createPet: Pets): Pets;
    findAllPets(): Pets[];
    findOnePet(id: string): Pets;
    updatePet(id: string, updatePets: UpdatePets): void;
    removePet(id: string): void;
}
export declare class UsersServise {
    private users;
    createUser(createUser: Users): Users;
    findAllUsers(): Users[];
    findOneUser(id: string): Users;
    updateUser(id: string, updateUsers: UpdateUsers): void;
    removeUser(id: string): void;
}
