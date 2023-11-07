import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaNotFoundExceptionFilter } from './exception-filters/prisma-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode:422,
    transform:true,
 }))

  app.useGlobalFilters(new PrismaNotFoundExceptionFilter())
  await app.listen(3000);
}
bootstrap();
