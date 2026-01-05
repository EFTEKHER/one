import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-twowaybinding',
  imports: [FormsModule],
  templateUrl: './twowaybinding.html',
  styleUrl: './twowaybinding.css',
})
export class Twowaybinding {
name:string="";

// effect(()=>{
//   console.log("Name changed to: "+this.name);});
//write  effect to log name changes
constructor(){
  effect(()=>{
    console.log("Name changed to: "+this.name);
  });
}
}
