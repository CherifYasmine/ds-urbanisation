import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   week = ["Invalid Number", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
   month = ["Invalid Number",'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    n = 0
  dayOfWeek(number): string{
    if(number > 7){
      return("Invalid Number")
    }else{      
      return(this.week[number])
    }
  }
  monthOfYear(number): string{
    if(number > 12){
      return("Invalid Number")
    }else{
      return(this.month[number])
    }
  }
}
