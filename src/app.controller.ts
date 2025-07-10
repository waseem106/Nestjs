import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService:UserService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-data')
  @HttpCode(206)
  getData():string{
    return this.appService.getData();
  }
  @Get('get-info/:id')
  @HttpCode(202)
  getInfo(@Param('id')id:string):string{
    console.log("get info params id ",id)
    return this.appService.getInfo();
  }

  @Get('test')
  getUser()
  {
    return this.userService.getHi();
  }

    
}