import { Inject, Injectable } from '@nestjs/common';
import { User } from './schemas/user.shema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@Inject('UserModel') private readonly userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
}
