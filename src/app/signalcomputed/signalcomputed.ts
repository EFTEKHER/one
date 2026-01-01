import { Component ,signal,computed} from '@angular/core';

@Component({
  selector: 'app-signalcomputed',
  imports: [],
  templateUrl: './signalcomputed.html',
  styleUrl: './signalcomputed.css',
})
export class Signalcomputed {
x=signal(10)
y=signal(20)
z=computed(()=>this.x()+this.y())

updatevalues(){
console.log(this.z())
this.x.set(30)
}
updatex()
{
this.x.set(500)
}
}
