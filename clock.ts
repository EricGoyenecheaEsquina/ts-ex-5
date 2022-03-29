export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minute?: number) {
    if (minute == undefined) {
      minute = 0;
    } else {

      if (minute < 0) {
        let minus: number = Math.floor(minute / 60);
        minute = 60 + minute% 60;
        hour = hour + minus;
        if (hour<0) {
          while(hour<0){
            hour=24+hour;
          }
        }
      }
      if (hour < 0) {
        let substract: number = hour % 24;
        hour = 24 + substract;
      }


      if (minute >= 60) {
        let add: number = Math.floor(minute / 60);
        minute = minute % 60;
        hour = hour + add;
      }
      if (hour >= 24) {
        hour = hour % 24;
      }

    }
    this.hour = hour;
    this.minute = minute;

  }

  public toString(): string {
    function pad2(number: number) {
      return (number < 10 ? '0' : '') + number

    }
    return (pad2(this.hour) + ":" + pad2(this.minute))
  }

  public plus(minutes: number): Clock {
    let hour: number
    hour = this.hour;
    minutes = this.minute + minutes;

    if (minutes >= 60) {
      let add: number = Math.floor(minutes / 60);
      minutes = minutes % 60;
      hour = hour + add;
      if (hour >= 24) {
        hour = hour % 24;
      }
    }

    this.minute = minutes;
    this.hour = hour;
    return this;
  }

  public minus(minutes: number): Clock {
    let hour: number
    hour = this.hour;
    
    minutes = this.minute - minutes;
    if (minutes < 0) {
      let minus: number = Math.floor(minutes / 60);
      minutes = 60 + minutes % 60;
      hour = hour + minus;
      if (hour<0) {
        while(hour<0){
          hour=24+hour;
        }
      }
    }

    this.minute = minutes;
    this.hour = hour;
    return this;
  }

  public equals(other: Clock): boolean {
    if(JSON.stringify(this) === JSON.stringify(other)){
      return true;
    }else{
      return false;
    }
  }
}

