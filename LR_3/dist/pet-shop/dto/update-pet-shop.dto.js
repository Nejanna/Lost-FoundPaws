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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsers = exports.UpdatePets = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_pet_shop_dto_1 = require("./create-pet-shop.dto");
class UpdatePets extends (0, mapped_types_1.PartialType)(create_pet_shop_dto_1.Pets) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'PetId' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alex', description: 'PetName' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'PetSex' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8', description: 'PetAge' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.jpg', description: 'PetPhoto' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.jpg', description: 'PetDocuments' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Documents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hound', description: 'PetSpecies' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Species", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Golden Retriever', description: 'PetBreed' }),
    __metadata("design:type", String)
], UpdatePets.prototype, "Pet_Breed", void 0);
exports.UpdatePets = UpdatePets;
class UpdateUsers extends (0, mapped_types_1.PartialType)(create_pet_shop_dto_1.Users) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'UserId' }),
    __metadata("design:type", String)
], UpdateUsers.prototype, "User_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alex', description: 'UserName' }),
    __metadata("design:type", String)
], UpdateUsers.prototype, "User_Username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TestMail@gmail.com', description: 'UserEmail' }),
    __metadata("design:type", String)
], UpdateUsers.prototype, "User_Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '85126sdqw73', description: 'UserPassword' }),
    __metadata("design:type", String)
], UpdateUsers.prototype, "User_Password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'UserSex' }),
    __metadata("design:type", String)
], UpdateUsers.prototype, "User_Sex", void 0);
exports.UpdateUsers = UpdateUsers;
//# sourceMappingURL=update-pet-shop.dto.js.map