import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMassError401Response {
  @ApiPropertyOptional({
    example: 401,
  })
  statusCode: number;

  @ApiPropertyOptional({
    example: 'Unauthorized',
  })
  message: string;
}
