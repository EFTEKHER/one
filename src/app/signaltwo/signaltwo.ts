import { Component, signal, WritableSignal,computed } from '@angular/core';

@Component({
  selector: 'app-signaltwo',
  imports: [],
  templateUrl: './signaltwo.html',
  styleUrl: './signaltwo.css',
})
export class Signaltwo {
data:WritableSignal<number>=signal<number>(10)
//use computed signals assign type automatically

updatesignal(){
this.data.update((val)=>val+10)
}
}
