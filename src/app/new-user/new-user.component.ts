import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.regForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      mailId: [''],
      phNo: ['']
    });
    console.log(this.regForm.controls);
  }
  onSubmit(): void {
    console.log(this.regForm.controls);
    // console.log(this.regForm.touched);
    // console.log(this.regForm.value);
    // console.log(this.regForm.controls);
    // console.log(this.regForm.get('firstName').value);
  }
}
