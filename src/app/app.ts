import { Component, Input, signal } from '@angular/core';
import { Appdata } from './appdata/appdata';
import { Login } from './login/login';
import { Signup } from './signup/signup';
// import { ProfileComponent } from './profile/profile';
import { Counter } from './counter/counter';
import { Inputs } from './inputs/inputs';
import { Ifelse } from './ifelse/ifelse';
import { Swichss } from './swichss/swichss';
import { Forss } from './forss/forss';
import { Signalss } from './signalss/signalss';
import { Signaltwo } from './signaltwo/signaltwo';
import { Signalcomputed } from './signalcomputed/signalcomputed';
import { Effectsn } from './effectsn/effectsn';
import { Loopcontextual } from './loopcontextual/loopcontextual';
import { Twowaybinding } from './twowaybinding/twowaybinding';
import { FormsModule } from '@angular/forms';
import { Directivess } from './directivess/directivess';
import { New } from './new/new';
import { Directivefor } from './directivefor/directivefor';
import { Ngifss } from './ngifss/ngifss';
import { Routess } from './routess/routess';
import { Routes,RouterLink,RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Profiless } from './profiless/profiless';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Reactiveformm } from './reactiveformm/reactiveformm';
import { Profilesxx } from './profilesxx/profilesxx';
import { Validatorm } from './validatorm/validatorm';
import { Templatedriven } from './templatedriven/templatedriven';
import { Reusecc } from './reusecc/reusecc';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,Counter,Inputs,Ifelse,Swichss,Forss,Signalss,Signaltwo,Signalcomputed,Effectsn,Loopcontextual,Twowaybinding,RouterOutlet,FormsModule,Directivess,New,Directivefor,Ngifss,Routess,RouterLink,Header,Profiless,Reactiveformm,Profilesxx,Validatorm,Templatedriven,Appdata,Reusecc],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Eftekher Ali Efte";
  name:string|number="tonmoy"
  other:any="why"
  userName:string="Efte"


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
  onUserChange(name:string){
    this.userName=name;
  }
}
