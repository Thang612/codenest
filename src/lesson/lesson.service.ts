import { Inject, Injectable } from '@nestjs/common';
import { Lesson } from './schemas/lesson.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from '../course/dto/create-course.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
    constructor(@Inject('LessonModel') private readonly lessonModel: Model<Lesson>) { }

    async create(createLesson: CreateLessonDto) {
        return await this.lessonModel.create(createLesson)
    }

    async getLessonByCourse(courseId: string) {
        return await this.lessonModel.find({ courseId }).sort({ order: 1 })
    }

    async update(_id: string, updateLesson: UpdateLessonDto) {
        return await this.lessonModel.findByIdAndUpdate(_id, updateLesson)
    }
}
