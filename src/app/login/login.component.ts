import { Component, OnInit } from '@angular/core';
import { User } from '../services/user.type';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  userForm = new FormGroup({
    'email': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  });

  formSubmitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      console.error('Проверьте введенные данные', 'Ошибка');
      return;
    }
    const values = this.userForm.value;
    const toSave = {
      email: values['email'],
      password: values['password']
    };
    this.router.navigateByUrl('/main');
  }

}
