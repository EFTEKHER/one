import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile';
import { Counter } from './counter/counter';
import { Inputs } from './inputs/inputs';
import { Ifelse } from './ifelse/ifelse';
import { Swichss } from './swichss/swichss';
import { Forss } from './forss/forss';
import { Signalss } from './signalss/signalss';
import { Signaltwo } from './signaltwo/signaltwo';
import { Signalcomputed } from './signalcomputed/signalcomputed';
import { Effectsn } from './effectsn/effectsn';


@Component({
  selector: 'app-root',
  imports: [Login,Signup,ProfileComponent,Counter,Inputs,Ifelse,Swichss,Forss,Signalss,Signaltwo,Signalcomputed,Effectsn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Eftekher Ali Efte";
  name:string|number="tonmoy"
  other:any="why"


  handleClickEvent()
  {
    // alert("function is called")
    console.log("function called")
    this.name="Ali"

  }
  otherFunction()
  {
    console.log("other function")
  }
  updatevar(){
    let x:number=30
    console.log(x)
  }
  sum(a:number,b:number){
    console.log(a+b)
  }
}
