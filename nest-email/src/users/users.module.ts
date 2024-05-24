import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { LoggerMiddleware } from 'src/common/middleware/LoggerMiddleware';
import { UserSchema } from './schema/user.schema';
import { UserService } from './users.service';



@Module({
  imports: [
    // MongooseModule.forFeature([{name: 'user', schema: UserSchema}])
  ],
  controllers: [UserController],
  providers: [UserService],
})
// export class UserModule{}
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

