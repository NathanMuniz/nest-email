import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { LoggerMiddleware } from 'src/common/middleware/LoggerMiddleware';
import { AppController } from 'src/app.controller';
// import { UserController } from './users.controller';


@Module({
  imports: [
    MongooseModule.forFeature([])
  ],
  controllers: [AppController],
  providers: [],
})
// export class UserModule{}
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

