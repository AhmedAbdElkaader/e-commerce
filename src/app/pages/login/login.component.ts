import { Component, OnInit } from '@angular/core';
import { CategoriService } from 'src/app/services/categori.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor(private rest : CategoriService , private route : Router){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl("", [Validators.required]),
    })
  }

  login(){
    this.rest.showSpiner()
    let form = this.loginForm.value
    if(this.loginForm.valid){
      this.rest.login(form).subscribe((res :any) => {
        console.log(res)
        this.rest.hideSpiner()
        this.rest.succesToast("Login Successfully")
        localStorage.setItem("access_token",res.access_token)
        this.route.navigateByUrl("/main")
      }, (err :any) => {
        this.rest.hideSpiner()
        this.rest.erorrToaster("Check Email Or Password")
      })
    }
  }

}
