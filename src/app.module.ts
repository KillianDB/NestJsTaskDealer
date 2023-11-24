import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaServices } from './prisma/prisma.services';
import { UserController } from './user/user.controller';
import { TaskController } from './task/task.controller';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({
    validate: (env) => envSchema.parse(env),
    isGlobal: true
  }), AuthModule],
  controllers: [UserController, TaskController],
  providers: [PrismaServices],
})
export class AppModule {}
