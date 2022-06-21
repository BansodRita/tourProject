import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  loginForm = new FormGroup({
    adminEmail: new FormControl(''),
    adminPassword: new FormControl('')

  });

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem("email", "admin");
    var email = localStorage.getItem("email");
    localStorage.setItem("pass", "admin@123");
    var password = localStorage.getItem("pass");
    console.log(this.loginForm.value.adminEmail);
    console.log(this.loginForm.value.adminPassword);
    
    if (email == this.loginForm.value.adminEmail && password == this.loginForm.value.adminPassword) {
alert('hello'); 
      this.route.navigate(['/admin'])
    }
  }



}
