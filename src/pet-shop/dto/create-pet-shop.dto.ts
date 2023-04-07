import { ApiProperty } from '@nestjs/swagger';

export class Pets {
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
export default Pets;
