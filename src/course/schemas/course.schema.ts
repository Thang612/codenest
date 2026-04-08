import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EStatus } from "../../enum/status.enum";

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
    @Prop()
    name!: string;

    @Prop({ unique: true })
    slug!: string;

    @Prop({ default: '' })
    avt!: string;

    @Prop({ default: '' })
    description!: string;

    @Prop({ default: 0 })
    minAge!: number;

    @Prop({ default: 100 })
    maxAge!: number;

    @Prop({ default: EStatus.Draft })
    status!: EStatus;
}

export const CourseSchema = SchemaFactory.createForClass(Course);