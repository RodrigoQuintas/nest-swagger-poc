import { Controller, Get, Post, Body, Version } from '@nestjs/common';
import { CreateMassDto } from './dto/create-mass.dto';
import {
  ApiBody,
  ApiHeaders,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateMassResponse } from './swagger/create-mass.response';
import { CreateMassError401Response } from './swagger/create-mass-error-401.response';
import { CreateMassError400Response } from './swagger/create-mass-error-400.response';
import { I18n, I18nContext, I18nService } from 'nestjs-i18n';

@Controller({ path: 'mass' })
export class MassController {
  constructor(private readonly i18n: I18nService) {}

  @Post()
  @ApiTags('Mass')
  @ApiHeaders([
    {
      name: 'x-api-version: 2',
      description: 'Api version',
    },
    {
      name: 'x-api-token',
      description: 'Api access token',
    },
  ])
  @ApiOperation({
    summary: 'Create mass id',
    description: 'Explain more about mass id create endpoint',
  })
  @ApiOkResponse({
    status: 201,
    description: 'Success',
    type: CreateMassResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: CreateMassError400Response,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: CreateMassError401Response,
  })
  @ApiBody({
    type: CreateMassDto,
  })
  create(@Body() createMassDto: CreateMassDto) {
    console.log('created mass', createMassDto);
  }

  @Get()
  @ApiTags('Mass')
  @Version('1')
  @ApiHeaders([
    {
      name: 'x-api-version: 2',
      description: 'Api version',
    },
    {
      name: 'x-api-token',
      description: 'Api access token',
    },
  ])
  @ApiOperation({
    summary: 'List masses ids',
    description: 'Explain more about mass id create endpoint v1',
  })
  @ApiOkResponse({
    status: 201,
    description: 'Success',
    type: CreateMassDto,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request',
    type: CreateMassError400Response,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: CreateMassError401Response,
  })
  findAll(@I18n() i18n: I18nContext) {
    //test i18n
    console.log(i18n.t('validations.HELLO', { lang: 'pt-br' }));
    console.log(this.i18n.translate('validations.HELLO', { lang: 'en' }));

    console.log('get masses');
  }
}
