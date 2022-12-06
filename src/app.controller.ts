import { Body, Controller, Get, Param, Response } from '@nestjs/common';
import { json2xml } from 'xml-js';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/day/:n')
  dayOfWeek(@Param('n') n, @Response() res) {
    const response = {day: this.appService.dayOfWeek(n)}
    const json = JSON.stringify(response);

    const xml = json2xml(json, { compact: true, spaces: 4 });

    res.send(xml);
    
  }
  @Get('/month/:n')
  monthOfYear(@Param('n') n, @Response() res) {
    const response = {day: this.appService.monthOfYear(n)}
    const json = JSON.stringify(response);

    const xml = json2xml(json, { compact: true, spaces: 4 });

    res.send(xml);
  }
}
