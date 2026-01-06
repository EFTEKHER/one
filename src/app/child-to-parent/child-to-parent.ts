import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.html',
  styleUrl: './child-to-parent.css',
})
export class ChildToParent {
users=['Efte','Tonmoy','Rony','Sakib','Jahid'];
@Output() getUsers= new EventEmitter();
// ngOnInit(){
//   this.getUsers.emit(this.users);}
loadData(){
  this.getUsers.emit(this.users);
}
}

