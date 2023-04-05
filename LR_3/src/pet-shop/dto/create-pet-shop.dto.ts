import { ApiProperty } from '@nestjs/swagger';

export class Pets {
  @ApiProperty({ example: '123', description: 'PetId' })
  Pet_id: string;
  @ApiProperty({ example: 'Alex', description: 'PetName' })
  Pet_Name: string;
  @ApiProperty({ example: 'Male', description: 'PetSex' })
  Pet_Sex: string;
  @ApiProperty({ example: '8', description: 'PetAge' })
  Pet_Age: string;
  @ApiProperty({ example: '123.jpg', description: 'PetPhoto' })
  Pet_Images: string;
  @ApiProperty({ example: '123.jpg', description: 'PetDocuments' })
  Pet_Documents: string;
  @ApiProperty({ example: 'Hound', description: 'PetSpecies' })
  Pet_Species: string;
  @ApiProperty({ example: 'Golden Retriever', description: 'PetBreed' })
  Pet_Breed: string;
}
export class Users {
  @ApiProperty({ example: '123', description: 'UserId' })
  User_id: string;
  @ApiProperty({ example: 'Alex', description: 'UserName' })
  User_Username: string;
  @ApiProperty({ example: 'TestMail@gmail.com', description: 'UserEmail' })
  User_Email: string;
  @ApiProperty({ example: '85126sdqw73', description: 'UserPassword' })
  User_Password: string;
  @ApiProperty({ example: 'Male', description: 'UserSex' })
  User_Sex: string;
}
