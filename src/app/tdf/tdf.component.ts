import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  standalone: false,
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {
  user = {
    name: '',
    email: '',
    gender: null,
    age: 18
   
  };

  onSubmit() {
    console.log('User:', this.user);
  }
}
