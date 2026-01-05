import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-ngifss',
  imports: [NgIf],
  templateUrl: './ngifss.html',
  styleUrl: './ngifss.css',
})
export class Ngifss {
login=false;
logout=true;
isworked()
{
  this.login!=this.login;
}
islogout()
{
  this.logout!=this.logout;}
}
