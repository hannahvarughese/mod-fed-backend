import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Vercel deployments
  app.enableCors({
    origin: '*', // Allow all origins (or specify your frontend URL)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If using cookies/auth headers
  });

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
