"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServise = exports.PetsService = void 0;
const common_1 = require("@nestjs/common");
const pet_exception_1 = require("../pet-shop/exception/note.exception/pet.exception");
const uuidv4_1 = require("uuidv4");
let PetsService = class PetsService {
    constructor() {
        this.pets = [];
    }
    createPet(createPet) {
        createPet.Pet_id = (0, uuidv4_1.uuid)();
        this.pets.push(createPet);
        return createPet;
    }
    findAllPets() {
        if (this.pets.length == 0) {
            throw new pet_exception_1.PetsException('There are no pets');
        }
        return this.pets;
    }
    findOnePet(id) {
        for (const item of this.pets) {
            if (item.Pet_id == id)
                return item;
            throw new pet_exception_1.PetsException('Such id does not exist');
        }
    }
    updatePet(id, updatePets) {
        const pid = this.pets.findIndex((p) => p.Pet_id == id);
        this.pets[pid] = Object.assign(Object.assign({}, this.pets[pid]), updatePets);
    }
    removePet(id) {
        const result = this.pets.filter((c) => c.Pet_id !== id);
        if (result.length === this.pets.length) {
            throw new pet_exception_1.PetsException('Such id does now exist');
        }
        this.pets = result;
    }
};
PetsService = __decorate([
    (0, common_1.Injectable)()
], PetsService);
exports.PetsService = PetsService;
let UsersServise = class UsersServise {
    constructor() {
        this.users = [];
    }
    createUser(createUser) {
        createUser.User_id = (0, uuidv4_1.uuid)();
        this.users.push(createUser);
        return createUser;
    }
    findAllUsers() {
        if (this.users.length == 0) {
            throw new pet_exception_1.PetsException('There are no users');
        }
        return this.users;
    }
    findOneUser(id) {
        for (const item of this.users) {
            if (item.User_id == id)
                return item;
            throw new pet_exception_1.PetsException('Such id does not exist');
        }
    }
    updateUser(id, updateUsers) {
        const pid = this.users.findIndex((p) => p.User_id == id);
        this.users[pid] = Object.assign(Object.assign({}, this.users[pid]), updateUsers);
    }
    removeUser(id) {
        const result = this.users.filter((c) => c.User_id !== id);
        if (result.length === this.users.length) {
            throw new pet_exception_1.PetsException('Such id does now exist');
        }
        this.users = result;
    }
};
UsersServise = __decorate([
    (0, common_1.Injectable)()
], UsersServise);
exports.UsersServise = UsersServise;
//# sourceMappingURL=pet-shop.service.js.map