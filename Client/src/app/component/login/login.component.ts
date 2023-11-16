import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserCredential } from 'src/app/Store/Model/user.model';
import { beginLogin } from 'src/app/Store/User/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private store:Store){}

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
    localStorage.clear()
  }

  proceedLogin(){
    if(this.loginForm.valid){
      const userCredential:UserCredential = {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
     this.store.dispatch(beginLogin({userCredential:userCredential})); 
    }
  }

  resetLogin(){
    this.loginForm.reset();
  }
}
