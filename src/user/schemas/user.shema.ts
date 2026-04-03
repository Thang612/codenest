import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ERoles } from "src/enum/roles.enum";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;

    @Prop({ unique: true })
    username: string;

    @Prop()
    password: string;

    @Prop({ enum: ERoles, default: ERoles.Student })
    roles: string;

    @Prop()
    dob: Date;

    @Prop()
    email: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);