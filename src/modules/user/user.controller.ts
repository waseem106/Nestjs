import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('create')
    @HttpCode(201)
    async create(@Body() createUserDto: any) {
        return this.userService.create(createUserDto)
    }


    @Get('welcome')
    welcome() {
        return 'Welcome to the user dashboard'
    }

    @Get('newdata')
    newData(){
        return 'Welcome to the new user data function'
    }

}
