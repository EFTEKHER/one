import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
task="";
tasksList:{id:number,task:string}[]=[];
 addTask(){
  if(this.task.trim().length===0){
    return;

  }
  else{
    this.tasksList.push({id:this.tasksList.length+1,task:this.task});
    this.task="";
    console.log(this.tasksList);
  }


}
  deleteTask(id:number){
    this.tasksList=this.tasksList.filter(t=>t.id!==id);
  }

}
