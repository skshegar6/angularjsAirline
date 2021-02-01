import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  loginForm = this.fb.group({
    UserName: [null, Validators.required],
    Password: [null, Validators.required]
  });

  cancelLogin(){
    alert(';;')
  }

  onSubmit() {
    console.log(this.loginService.checkingUserStaff(this.loginForm.value))
  }
}
