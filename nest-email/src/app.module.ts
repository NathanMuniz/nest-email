import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { UserModule } from './users/users.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [AppService],
})
export class AppModule {}
