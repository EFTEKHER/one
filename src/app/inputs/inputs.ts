import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  imports: [],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
name=""
displayname=""
getName(event:Event)
{
  this.name=(event.target as HTMLInputElement).value
  console.log(event)
}
showName(){
  this.displayname=this.name
  console.log(this.displayname)
  if(this.displayname){
    alert("Your name is: "+this.displayname)
  }else{
    alert("Please enter your name")
  }

}
setName(){
  this.name=""
  this.displayname=""
  //setnsame function should name id name all value in input field
  const inputElement=document.getElementById("name") as HTMLInputElement
  if(inputElement){
    inputElement.value=""
  }
  
}

}
