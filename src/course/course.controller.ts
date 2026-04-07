import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) { }

    @Post()
    async create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Patch(':id')
    async update(@Param('id') _id: string, @Body() updateCourseDto: UpdateCourseDto,) {
        return this.courseService.update(_id, updateCourseDto);
    }

    @Get()
    async findAll() {
        return this.courseService.findAll();
    }
}
