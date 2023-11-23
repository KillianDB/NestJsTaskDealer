import { Module } from '@nestjs/common';
import { PrismaServices } from './prisma/prisma.services';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaServices],
})
export class AppModule {}
