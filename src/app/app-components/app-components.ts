import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-app-components',
  imports: [],
  templateUrl: './app-components.html',
  styleUrl: './app-components.css',
})
export class AppComponents {
  name="Efte"
  @Input() counter=0;
  // constructor(){
  //   console.log('constructor called');
  //   this.name="Ali Efte"
  //   console.log(this.name)

  // }
  // ngOnInit(){
  //   console.log('ngOnInit called');
  //   this.name="Eftekher Ali Efte"
  //   console.log(this.name)
  // }
  // ngOnDestroy(){
  //   console.log('ngOnDestroy called');
  // }
 ngOnChanges(){
    console.log('ngOnChanges called');
  }

}
