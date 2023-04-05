import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { PetsService, UsersServise } from './pet-shop.service';
import { Pets, Users } from './dto/create-pet-shop.dto';
import { UpdatePets, UpdateUsers } from './dto/update-pet-shop.dto';
import { PetsExceptionFilter } from './filter/note-exception/pet-exception.filter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('Users')
@UseFilters(new PetsExceptionFilter())
export class PetsController {
  constructor(
    private readonly PetsService: PetsService,
    private readonly UsersServise: UsersServise,
  ) { }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [Users] })
  @Get()
  findUsers(): Users[] {
    return this.UsersServise.findAllUsers();
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Get one user' })
  @ApiResponse({ status: 200, type: [Users] })
  @Get(':User_id')
  findUser(@Param('User_id') id: string): Users {
    return this.UsersServise.findOneUser(id);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Update one user' })
  @ApiResponse({ status: 200, type: [Users] })
  @Patch(':User_id')
  UpdateOneUser(
    @Param('User_id') id: string,
    @Body() updateUsers: UpdateUsers,
  ) {
    return this.UsersServise.updateUser(id, updateUsers);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Delete one user' })
  @ApiResponse({ status: 200, type: [Users] })
  @Delete(':User_id')
  DeleteOnePet(@Param('User_id') id: string) {
    return this.UsersServise.removeUser(id);
  }

  @ApiTags('Users API')
  @ApiOperation({ summary: 'Create one user' })
  @ApiResponse({ status: 200, type: [Users] })
  @Post()
  createOneUser(@Body() user: Users) {
    return this.UsersServise.createUser(user);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Get all animals' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Get(':User_id/Pets')
  findAllPets() {
    return this.PetsService.findAllPets();
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Get one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Get(':User_id/Pets/:Pet_id')
  findOnePet(@Param('Pet_id') id: string): Pets {
    return this.PetsService.findOnePet(id);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Update one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Patch(':User_id/Pets/:Pet_id')
  updatePet(@Param('Pet_id') id: string, @Body() updatePets: UpdatePets) {
    return this.PetsService.updatePet(id, updatePets);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Delete one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Delete(':User_id/Pets/:Pet_id')
  removePet(@Param('Pet_id') id: string) {
    return this.PetsService.removePet(id);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Create one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Post(':User_id/Pets')
  createPet(@Body() pet: Pets) {
    return this.PetsService.createPet(pet);
  }
}
