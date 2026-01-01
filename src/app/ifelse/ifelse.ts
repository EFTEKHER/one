import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  display=true;
  x=10;
  clickevent(event: any)
  {
    console.log("ifelse clicked",event)
    this.display=!this.display
  }
  color:number=0;
  changeColor(){
    this.color=this.color+1;
    if (this.color>5){
      this.color=0;
    }
  }
  handlechange(){
    this.changeColor();
    console.log("color changed to ",this.color)
  }

}
