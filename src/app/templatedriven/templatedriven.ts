import { Component } from '@angular/core';
import { NgForm ,FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-templatedriven',
  imports: [FormsModule, NgIf],
  templateUrl: './templatedriven.html',
  styleUrl: './templatedriven.css',
})
export class Templatedriven {
  userDetails:any;
addDetails(val: NgForm){
  console.log(val.value);
  this.userDetails=val.value;
}

}
