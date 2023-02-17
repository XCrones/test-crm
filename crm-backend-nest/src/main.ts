import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 4444;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
    },
  });
  await app.listen(PORT);
}
bootstrap();
