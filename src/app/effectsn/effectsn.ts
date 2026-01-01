import { Component, signal ,effect, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-effectsn',
  imports: [],
  templateUrl: './effectsn.html',
  styleUrl: './effectsn.css',
})
export class Effectsn {
userName=signal('Eftekher Ali Efte')
displayheading=false
// writableSignal<string>
count:WritableSignal<number>=signal<number>(0)
constructor(){
  effect(()=>{
    console.log("User name changed to: "+this.userName())
  if(this.count()%2==0){
    this.userName.set("Eftekher Ali Efte")
    setTimeout(() => {
      this.toggles()
    }, 2000);
  }
  else{
    this.userName.set("Tonmoy Mia")


  }

});}
toggles(){
    this.count.set(this.count()+1)
    this.displayheading=!this.displayheading
  }

}
