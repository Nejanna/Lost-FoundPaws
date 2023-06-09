"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetShopModule = void 0;
const common_1 = require("@nestjs/common");
const pet_shop_service_1 = require("./pet-shop.service");
const pet_shop_controller_1 = require("./pet-shop.controller");
let PetShopModule = class PetShopModule {
};
PetShopModule = __decorate([
    (0, common_1.Module)({
        controllers: [pet_shop_controller_1.PetsController],
        providers: [pet_shop_service_1.PetsService, pet_shop_service_1.UsersServise],
    })
], PetShopModule);
exports.PetShopModule = PetShopModule;
//# sourceMappingURL=pet-shop.module.js.map