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
exports.Users = exports.Pets = void 0;
const swagger_1 = require("@nestjs/swagger");
class Pets {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'PetId' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alex', description: 'PetName' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'PetSex' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8', description: 'PetAge' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.jpg', description: 'PetPhoto' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123.jpg', description: 'PetDocuments' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Documents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Hound', description: 'PetSpecies' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Species", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Golden Retriever', description: 'PetBreed' }),
    __metadata("design:type", String)
], Pets.prototype, "Pet_Breed", void 0);
exports.Pets = Pets;
class Users {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123', description: 'UserId' }),
    __metadata("design:type", String)
], Users.prototype, "User_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Alex', description: 'UserName' }),
    __metadata("design:type", String)
], Users.prototype, "User_Username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'TestMail@gmail.com', description: 'UserEmail' }),
    __metadata("design:type", String)
], Users.prototype, "User_Email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '85126sdqw73', description: 'UserPassword' }),
    __metadata("design:type", String)
], Users.prototype, "User_Password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', description: 'UserSex' }),
    __metadata("design:type", String)
], Users.prototype, "User_Sex", void 0);
exports.Users = Users;
//# sourceMappingURL=create-pet-shop.dto.js.map