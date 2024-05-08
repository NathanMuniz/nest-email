import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { UserController } from './users.controller';


@Module({
  imports: [
    MongooseModule.forFeature([], 'user')
  ],
  controllers: [],
  providers: [],
})
export class UserModule {}
