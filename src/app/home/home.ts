import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterLink } from "@angular/router";
//use navigate with parameter
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
constructor(private router: Router){}
// gotoprofile(){

//   this.router.navigate(['profile'],{queryParams:{name:'Eftekher Ali Efte'}});
// }
users=[
  {
    id: 1,
    name:'Eftekher',
    age: 26,
    email: 'efte@test.com'
  },
  {
    id:2,
    name:'Ali',
    age:28,
    email:"ali@AudioListener.com"

  },{
    id:3,
    name:"john",
    age:30,
    email:"jonh@example.com"
  },{
    id:4,
    name:"doe",
    age:24,
    email:"doe@example.com"}

]
}
