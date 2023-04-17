import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateMassDto {
  @IsNumber()
  @Min(0)
  @ApiProperty({
    description:
      'A number representing the current value of the Mass. Must be a positive number',
    example: 100,
  })
  currentValue: number;

  @IsDate()
  @ApiProperty({
    description: 'A date representing the external creation date of the Mass',
    example: '2023-04-12T12:34:56.789Z',
  })
  externalCreatedAt: Date;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'An optional string representing the external ID of the Mass',
    example: 'ext123',
  })
  externalId?: string | undefined;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'A string representing the unique ID of the Mass. Must not be empty',
    example: '123456',
  })
  id: string;

  @IsNumber()
  @Min(0)
  @ApiProperty({
    description:
      'A number representing the initial value of the Mass. Must be a positive number.',
    example: 50,
  })
  initialValue: number;

  @IsBoolean()
  @ApiProperty({
    description: 'A boolean indicating if the Mass is public or not.',
    example: true,
  })
  isPublic: boolean;

  @IsBoolean()
  @ApiProperty({
    description:
      'A boolean indicating if the Mass is publicly searchable or not.',
    example: true,
  })
  isPubliclySearchable: boolean;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    description:
      'An optional string representing the ID of the parent Mass object.',
    example: '123456',
  })
  parentMassId?: string | undefined;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'A string representing the type of the Mass. Must not be empty.',
    example: 'parent123',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'A string representing the subtype of the Mass. Must not be empty.',
    example: 'type2',
  })
  subtype: string;
}
