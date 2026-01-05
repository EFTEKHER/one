import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-directivefor',
  imports: [NgFor],
  templateUrl: './directivefor.html',
  styleUrl: './directivefor.css',
})
export class Directivefor {
students=["Efte","Tonmoy","Ali","Khan","Rana","Sakib"];
}
