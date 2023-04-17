import { Module } from '@nestjs/common';
import { MassController } from './mass.controller';

@Module({
  controllers: [MassController],
  providers: [],
})
export class MassModule {}
