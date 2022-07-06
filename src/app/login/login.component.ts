import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  registerForm = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{3,8}$')]),
  })

  submitRegisterForm(registerForm:FormGroup){
    console.log(registerForm);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
