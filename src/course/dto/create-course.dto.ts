export class CreateCourseDto {
    name!: string;
    slug!: string;
    avt?: string;
    description?: string;
    minAge?: number;
    maxAge?: number;
}