import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private route: ActivatedRoute) {}

  userId: string | null = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      console.log('User ID parameter:', this.userId);
    });
  }

}
