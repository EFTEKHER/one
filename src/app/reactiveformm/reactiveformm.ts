import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveformm',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveformm.html',
  styleUrl: './reactiveformm.css',
})
export class Reactiveformm {

  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
  setValue(){
    this.profileForm.setValue({
      name:'Eftekher Ali Efte',
      password: '12345',
      email: 'eftekherali2000@gmail.com'
    });
  }
}
