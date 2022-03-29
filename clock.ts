export class Clock {
  hour: number;
  minute: number;
  constructor(hour: number, minutes?: number) {
    this.hour=0;
    this.minute=0;
    if(minutes==undefined){
      this.hour=hour;
      minutes==0
    }else{
      let total:number=minutes+hour*60;
      if(total>0){
        this.plus(total);
      }else{
        console.log(-total);
        this.minus(-total);
      }
    } 
  }
  public toString(): string {
    function pad2(number: number) {
      return (number < 10 ? '0' : '') + number
    }
    return (pad2(this.hour) + ":" + pad2(this.minute))
  }
  public plus(minutes: number): Clock {
    let total:number= this.hour*60+this.minute;
    total= total + minutes;
    this.hour=Math.trunc(total / 60)%24;
    this.minute=total%60;
    return this;
  }
  public minus(minutes: number): Clock {
    let total:number= this.hour*60+this.minute;
    total= total - minutes;
      this.hour=Math.trunc(total / 60)%24;
      this.minute=total%60;
    if(total<0){
      this.hour=this.hour+24-1;
      this.minute=this.minute+60;
      if(this.minute==60){
        this.minute=0
        this.hour=this.hour+1;
      }
    }
    return this;
  }
  public equals(other: Clock): boolean {
    if (JSON.stringify(this) === JSON.stringify(other)) {
      return true;
    } else {
      return false;
    }
  }
}
