import { Controller, Get, HttpCode, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { Response } from 'express';

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

  @Get('hi')
  newMethod(@Res()res:Response) {
    return res.status(202).send("testing manual Response")
  }

  @Get('get-data')
  @HttpCode(206)
  getData():string{
    return this.appService.getData();
  }
  @Get('get-info/:name')
  @HttpCode(202)
  getInfo(@Param('name')name:string):string{
    console.log("get info params name ",name)
    return this.appService.getInfo(name);
  }

  @Get('test')
  getUser()
  {
    return this.userService.getHi();
  }

  @Get('mytest')
  testing(){
    return this.userService.mytesting()
  }


  newfunct()
  {
    return 'nothing'
  }
    
}