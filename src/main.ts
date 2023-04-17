import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('ZWF API')
    .setDescription('External Mass Api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  writeFile('swagger.json', JSON.stringify(document), (err) => {
    if (err) console.log(err);
    else {
      console.log('swagger.json file has been updated successfully\n');
    }
  });

  await app.listen(3000);
}
bootstrap();
