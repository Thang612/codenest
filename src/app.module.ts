import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CourseModule } from './course/course.module';
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGO_URI || ''), UserModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
