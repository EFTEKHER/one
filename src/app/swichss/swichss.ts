import { Component } from '@angular/core';

@Component({
  selector: 'app-swichss',
  imports: [],
  templateUrl: './swichss.html',
  styleUrl: './swichss.css',
})
export class Swichss {
 color:number=0
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
