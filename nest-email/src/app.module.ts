import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config';


var userString = config.db.user && config.db.pass 
? config.db.user + ":" + config.db.pass + "@" 
: "";

var authSource = config.db.authSource ? "":"";


@Module({
  imports: [
    MongooseModule.forFeature([], "mongodb://" + userString + config.db.host + config.db.port || 27017 + config.db.database + authSource),
    UserModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
