import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) 
        private readonly userModel:Model<UserDocument>
    ){}


    async create(createUserDto:any):Promise<User>{
        const createdUser=new this.userModel(createUserDto)
        return createUserDto.save()
    }
    @Get()
    getHi(){
        return 'this is the data of user'
    }
}
