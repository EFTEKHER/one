import { Component,signal,effect} from '@angular/core';

@Component({
  selector: 'app-signalss',
  imports: [],
  templateUrl: './signalss.html',
  styleUrl: './signalss.css',
})
export class Signalss {
 count =signal(10);
 x=20;

 updatecount()
 {
  this.x+=10;
 }
 constructor(){
  effect(()=>{
    console.log("count changed to ",this.count())
    console.log("x is", this.x)
  })
 }
}
