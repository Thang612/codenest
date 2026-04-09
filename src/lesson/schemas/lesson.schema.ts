import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type LessonDocument = Lesson & Document;

@Schema({ timestamps: true })
export class Lesson {
    @Prop({ required: true })
    name!: string;

    @Prop({ default: '' })
    description!: string;

    @Prop()
    order!: number;

    @Prop({ type: Types.ObjectId, ref: "Course", required: true, index: true })
    courseId!: Types.ObjectId;

    @Prop({ default: false })
    isDelete!: boolean
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
