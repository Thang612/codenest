import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from './schemas/lesson.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lesson', schema: LessonSchema }])],
  providers: [LessonService],
  controllers: [LessonController]
})
export class LessonModule { }
