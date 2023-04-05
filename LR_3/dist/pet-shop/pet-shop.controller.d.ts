import { PetsService, UsersServise } from './pet-shop.service';
import { Pets, Users } from './dto/create-pet-shop.dto';
import { UpdatePets, UpdateUsers } from './dto/update-pet-shop.dto';
export declare class PetsController {
    private readonly PetsService;
    private readonly UsersServise;
    constructor(PetsService: PetsService, UsersServise: UsersServise);
    findUsers(): Users[];
    findUser(id: string): Users;
    UpdateOneUser(id: string, updateUsers: UpdateUsers): void;
    DeleteOnePet(id: string): void;
    createOneUser(user: Users): Users;
    findAllPets(): Pets[];
    findOnePet(id: string): Pets;
    updatePet(id: string, updatePets: UpdatePets): void;
    removePet(id: string): void;
    createPet(pet: Pets): Pets;
}
