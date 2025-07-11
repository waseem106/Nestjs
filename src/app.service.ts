import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData():string{
    return "hi it is waseem"
  }
  getInfo(name:string):string{
    return `Hi,${name} Welcome to the NEST`
  }
}
