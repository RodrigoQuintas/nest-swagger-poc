import { ApiProperty } from '@nestjs/swagger';

export class CreateMassError400Response {
  @ApiProperty({
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Invalid Payload',
  })
  message: string;
}
