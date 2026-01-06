import { Component, Input, signal, viewChild,afterNextRender } from '@angular/core';
import { Appdata } from './appdata/appdata';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Product } from './services/product';
// import { ProfileComponent } from './profile/profile';

import { ViewChild } from '@angular/core';
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
import { ChildToParent } from './child-to-parent/child-to-parent';
import { CurrencyPipe } from './pipes/currency-pipe';
import { AppComponents } from './app-components/app-components';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Login,Signup,Counter,Inputs,Ifelse,Swichss,Forss,Signalss,Signaltwo,Signalcomputed,Effectsn,Loopcontextual,Twowaybinding,RouterOutlet,FormsModule,Directivess,New,Directivefor,Ngifss,Routess,RouterLink,Header,Profiless,Reactiveformm,Profilesxx,Validatorm,Templatedriven,Appdata,Reusecc,ChildToParent,CurrencyPipe,AppComponents,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Eftekher Ali Efte";
  name:string|number="tonmoy"
  other:any="why"
  userName:string="Efte"
  amount=10;

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
  users:undefined|string[];
  handleUsers(users:string[]|undefined){
    console.log('Received users from child component:', users);
    this.users=users;
  }
 counter=0;
  updateCounter(){
    this.counter++;
  }
// @ViewChild('appComponents') AppComponents:any;

// constructor(){
//   afterNextRender(()=>{
//     console.log(this.AppComponents.counter);
//   })
// }
constructor(private products:Product){
  
}
}
