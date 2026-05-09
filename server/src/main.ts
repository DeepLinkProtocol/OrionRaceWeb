import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';

// @nestjs/schedule references bare global `crypto` (crypto.randomUUID),
// but CommonJS-emitted code under Node 18 only exposes Web Crypto as
// globalThis.crypto. Wire it up before bootstrap so scheduler init
// doesn't ReferenceError on first @Interval registration.
import { webcrypto } from 'crypto';
if (!(globalThis as any).crypto) {
  (globalThis as any).crypto = webcrypto;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
