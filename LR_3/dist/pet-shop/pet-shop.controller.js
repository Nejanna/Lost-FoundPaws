"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const pet_shop_service_1 = require("./pet-shop.service");
const create_pet_shop_dto_1 = require("./dto/create-pet-shop.dto");
const update_pet_shop_dto_1 = require("./dto/update-pet-shop.dto");
const pet_exception_filter_1 = require("./filter/note-exception/pet-exception.filter");
const swagger_1 = require("@nestjs/swagger");
let PetsController = class PetsController {
    constructor(PetsService, UsersServise) {
        this.PetsService = PetsService;
        this.UsersServise = UsersServise;
    }
    findUsers() {
        return this.UsersServise.findAllUsers();
    }
    findUser(id) {
        return this.UsersServise.findOneUser(id);
    }
    UpdateOneUser(id, updateUsers) {
        return this.UsersServise.updateUser(id, updateUsers);
    }
    DeleteOnePet(id) {
        return this.UsersServise.removeUser(id);
    }
    createOneUser(user) {
        return this.UsersServise.createUser(user);
    }
    findAllPets() {
        return this.PetsService.findAllPets();
    }
    findOnePet(id) {
        return this.PetsService.findOnePet(id);
    }
    updatePet(id, updatePets) {
        return this.PetsService.updatePet(id, updatePets);
    }
    removePet(id) {
        return this.PetsService.removePet(id);
    }
    createPet(pet) {
        return this.PetsService.createPet(pet);
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Users API'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Users] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PetsController.prototype, "findUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users API'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Users] }),
    (0, common_1.Get)(':User_id'),
    __param(0, (0, common_1.Param)('User_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", create_pet_shop_dto_1.Users)
], PetsController.prototype, "findUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users API'),
    (0, swagger_1.ApiOperation)({ summary: 'Update one user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Users] }),
    (0, common_1.Patch)(':User_id'),
    __param(0, (0, common_1.Param)('User_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_shop_dto_1.UpdateUsers]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "UpdateOneUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users API'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete one user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Users] }),
    (0, common_1.Delete)(':User_id'),
    __param(0, (0, common_1.Param)('User_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "DeleteOnePet", null);
__decorate([
    (0, swagger_1.ApiTags)('Users API'),
    (0, swagger_1.ApiOperation)({ summary: 'Create one user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Users] }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_shop_dto_1.Users]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "createOneUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Animals API'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all animals' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Pets] }),
    (0, common_1.Get)(':User_id/Pets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "findAllPets", null);
__decorate([
    (0, swagger_1.ApiTags)('Animals API'),
    (0, swagger_1.ApiOperation)({ summary: 'Get one animal' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Pets] }),
    (0, common_1.Get)(':User_id/Pets/:Pet_id'),
    __param(0, (0, common_1.Param)('Pet_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", create_pet_shop_dto_1.Pets)
], PetsController.prototype, "findOnePet", null);
__decorate([
    (0, swagger_1.ApiTags)('Animals API'),
    (0, swagger_1.ApiOperation)({ summary: 'Update one animal' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Pets] }),
    (0, common_1.Patch)(':User_id/Pets/:Pet_id'),
    __param(0, (0, common_1.Param)('Pet_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pet_shop_dto_1.UpdatePets]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "updatePet", null);
__decorate([
    (0, swagger_1.ApiTags)('Animals API'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete one animal' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Pets] }),
    (0, common_1.Delete)(':User_id/Pets/:Pet_id'),
    __param(0, (0, common_1.Param)('Pet_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "removePet", null);
__decorate([
    (0, swagger_1.ApiTags)('Animals API'),
    (0, swagger_1.ApiOperation)({ summary: 'Create one animal' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [create_pet_shop_dto_1.Pets] }),
    (0, common_1.Post)(':User_id/Pets'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pet_shop_dto_1.Pets]),
    __metadata("design:returntype", void 0)
], PetsController.prototype, "createPet", null);
PetsController = __decorate([
    (0, common_1.Controller)('Users'),
    (0, common_1.UseFilters)(new pet_exception_filter_1.PetsExceptionFilter()),
    __metadata("design:paramtypes", [pet_shop_service_1.PetsService,
        pet_shop_service_1.UsersServise])
], PetsController);
exports.PetsController = PetsController;
//# sourceMappingURL=pet-shop.controller.js.map