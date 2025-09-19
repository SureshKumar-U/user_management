import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // converts dto plain objects to class Instances
    }),
  );
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
