import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appdata',
  imports: [],
  templateUrl: './appdata.html',
  styleUrl: './appdata.css',
})
export class Appdata {
@Input() user: string='';
onUserChange(name:string){
  this.user=name;}
}
