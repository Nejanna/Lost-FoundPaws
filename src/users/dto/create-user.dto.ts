import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'TestMail@gmail.com', description: 'UserEmail' })
  email: string;
  @ApiProperty({ example: 'Alex', description: 'UserName' })
  name: string;
  @ApiProperty({ example: '85126sdqw73', description: 'UserPassword' })
  password: string;
}

export default CreateUserDto;
