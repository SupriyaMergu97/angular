import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    uname: '',
    pword: ''
  };
  show = false;
  constructor() { }

  ngOnInit() {
  }
  info() {
    this.show = !this.show;
  }

  setInfo(e, key) {
    this.login[key] = e.target.value;
  }
}

