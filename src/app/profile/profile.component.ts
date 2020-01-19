import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile = {
    name: 'supriya',
    age: '24',
    gender: 'female',
    mail: 'supriya@gmail.com',
    phno: '9780926408'
  };
  constructor() { }

  ngOnInit() {
  }

}
