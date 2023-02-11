import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriService } from 'src/app/services/categori.service';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  
  constructor(private rest : CategoriService){}
  
  ngOnInit(){
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      is_admin: new FormControl("", [Validators.required]),
    })
  }

  Register(){
    console.log(this.registerForm.value)
  }

}
