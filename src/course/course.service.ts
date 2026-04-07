import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    constructor(@Inject('CourseModel') private readonly courseModel: Model<Course>) { }

    async create(createCourseDto: CreateCourseDto) {
        return this.courseModel.create(createCourseDto);
    }

    async update(_id: string, updateCourseDto: UpdateCourseDto) {
        return this.courseModel.findByIdAndUpdate(_id, updateCourseDto, { new: true });
    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find().exec();
    }
}
