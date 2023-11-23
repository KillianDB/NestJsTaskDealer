import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServices } from './prisma/prisma.services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServices],
})
export class AppModule {}
