export class Clock {
  minute: number;
  hour: number;
  constructor(hour: number=0, minutes: number = 0,total:number=0) {
    (total!=0) ? total=total : total=hour*60+minutes;
    (total > 0) ? this.hour=Math.trunc(total/60)%24: this.hour=Math.trunc(total/60)%24+24-1;
    (total > 0) ? this.minute=total%60: this.minute=total%60+60;
    if(this.minute==60){
      this.minute=0
      this.hour=this.hour+1;
    }
  }
  public toString(): string {
    function pad2(number: number) {
      return (number < 10 ? '0' : '') + number;
    }
    return (pad2(this.hour) + ":" + pad2(this.minute))
  }
  public plus(minutes: number): Clock {
    return(new Clock(this.hour,this.minute,(this.hour*60+this.minute+minutes)));
  }
  public minus(minutes: number): Clock {
    return(new Clock(this.hour,this.minute,(this.hour*60+this.minute-minutes)));
  }
  public equals(other: Clock): boolean {
    if (JSON.stringify(this) === JSON.stringify(other)) {
      return true;
    } else {
      return false;
    }
  }
}
