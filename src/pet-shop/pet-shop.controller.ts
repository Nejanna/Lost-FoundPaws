import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { PetsService } from './pet-shop.service';
import { Pets } from './dto/create-pet-shop.dto';
import { UpdatePets } from './dto/update-pet-shop.dto';
import { PetsExceptionFilter } from './filter/note-exception/pet-exception.filter';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from '../authentication/guards/jwt-authentication.guard';

@Controller('Pets')
@UseFilters(new PetsExceptionFilter())
export class PetsController {
  constructor(private readonly PetsService: PetsService) { }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Create one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPet(@Body() pet: Pets) {
    return this.PetsService.createPet(pet);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Get all animals' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Get()
  findAllPets() {
    return this.PetsService.findAllPets();
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Get one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Get(':id')
  findOnePet(@Param('id') id: string) {
    return this.PetsService.findOnePet(Number(id));
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Update one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Patch(':id')
  @UseGuards(JwtAuthenticationGuard)
  async updatePet(@Param('id') id: string, @Body() Animal: UpdatePets) {
    return this.PetsService.updatePet(Number(id), Animal);
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Delete one animal' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  async removePet(@Param('id') id: string) {
    return this.PetsService.removePet(Number(id));
  }

  @ApiTags('Animals API')
  @ApiOperation({ summary: 'Delete all animals' })
  @ApiResponse({ status: 200, type: [Pets] })
  @Delete()
  @UseGuards(JwtAuthenticationGuard)
  async removeAllUsers() {
    return this.PetsService.removeAllPets();
  }
}
