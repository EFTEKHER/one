import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-validatorm',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './validatorm.html',
  styleUrl: './validatorm.css',
})
export class Validatorm {

  validatorForm=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$')])
  });

  onSubmit(){
    console.log(this.validatorForm.value);
  }
  setValue(){
    this.validatorForm.setValue({
      name:'Eftekher Ali Efte',
      password: '12345',
      email: 'eftekherali2000@gmail.com'
    });
  }
  get name(){
    return this.validatorForm.get('name');
 }
 get email(){
    return this.validatorForm.get('email');
 }
  get password(){
    return this.validatorForm.get('password');
  }

}
