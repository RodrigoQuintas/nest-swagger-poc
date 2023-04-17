import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMassResponse {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A string representing the unique ID of the Mass',
    example: '123456',
  })
  id: string;
}
