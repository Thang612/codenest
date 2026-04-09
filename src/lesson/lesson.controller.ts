import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lesson')
export class LessonController {
    constructor(private readonly lessonService: LessonService) { }

    @Post()
    async create(@Body() createLesson: CreateLessonDto) {
        return this.lessonService.create(createLesson)
    }

    @Get('course/:courseId')
    async findLessonByCourse(@Param('courseId') courseId: string) {
        return this.lessonService.getLessonByCourse(courseId);
    }

    @Patch(":id")
    async update(@Param('id') _id: string, @Body() updateLessonDto: UpdateLessonDto) {
        return this.lessonService.update(_id, updateLessonDto)
    }

}
