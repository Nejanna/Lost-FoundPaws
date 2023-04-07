import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Pets } from './create-pet-shop.dto';

export class UpdatePets extends PartialType(Pets) {
  @ApiProperty({ example: 123, description: 'PetId' })
  id: number;
  @ApiProperty({ example: 'Alex', description: 'PetName' })
  Name: string;
  @ApiProperty({ example: 'Male', description: 'PetSex' })
  Sex: string;
  @ApiProperty({ example: '8', description: 'PetAge' })
  Age: string;
  @ApiProperty({ example: '123.jpg', description: 'PetPhoto' })
  Images: string;
  @ApiProperty({ example: '123.jpg', description: 'PetDocuments' })
  Documents: string;
  @ApiProperty({ example: 'Hound', description: 'PetSpecies' })
  Species: string;
  @ApiProperty({ example: 'Golden Retriever', description: 'PetBreed' })
  Breed: string;
}
