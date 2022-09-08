import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }
  role: any;
  rol: Array<String> = [];

  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  equipes: Equi[] = [
    {value: 'admin', viewValue: 'admin'},
    {value: 'user', viewValue: 'investisseur'},
    {value: 'mod', viewValue: 'entrepreneur'},
      ];

  ngOnInit(): void {
  }

  onSubmit(): void {
this.rol.push(this.role);
console.log(this.rol);
    const { username, email, password} = this.form;
    this.authService.register(username, email, password, this.rol).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  selected() {
    console.log(this.role);
  }
}
export interface Equi {
  value: string;
  viewValue: string;
}

