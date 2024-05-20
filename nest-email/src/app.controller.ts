import { Controller, Get, MiddlewareConsumer, NestModule, Post } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/LoggerMiddleware';
import { UserController } from './users/users.controller';

@Controller('users')
export class AppController {

  @Post()
  getHello(): string {
    return 'test'
  }
}
