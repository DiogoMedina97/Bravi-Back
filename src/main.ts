import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';

const env = config().parsed || {};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(env.PORT);
}
bootstrap();
