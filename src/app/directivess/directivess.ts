import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-directivess',
  imports: [NgIf],
  templateUrl: './directivess.html',
  styleUrl: './directivess.css',
})
export class Directivess {
  show=true;

}
