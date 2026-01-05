import { Component } from '@angular/core';
import { Routes, RouterOutlet,RouterLink, } from '@angular/router';
import { Login } from '../login/login';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-routess',
  imports: [RouterOutlet,RouterLink,Login,About,Contact],
  templateUrl: './routess.html',
  styleUrl: './routess.css',
})
export class Routess {
  

}
