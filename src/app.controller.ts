import { Controller, Get, HttpStatus, HttpException } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { async } from 'rxjs';
import { AppService } from './app.service';
import { PetsController } from './pet-shop/pet-shop.controller';

@Controller()
export class AppController {
  private readonly petsController: PetsController;

  // constructor(private readonly appService: AppService) {
  //   this.petShopController = new PetShopController();
  // }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @ApiExcludeEndpoint()
  @Get('/')
  async rrr() {
    return 'Nothing to see';
  }
}
