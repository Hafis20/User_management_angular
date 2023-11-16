import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { showAlert } from 'src/app/Store/Common/app.actions';
import { Users } from 'src/app/Store/Model/user.model';
import { beginRegister, duplicateUser } from 'src/app/Store/User/user.actions';
import { isDuplicateUser } from 'src/app/Store/User/user.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private store:Store,private builder:FormBuilder){}

  registerForm!:FormGroup;

  ngOnInit(){
    this.registerForm = new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,Validators.required),
      confirmpassword:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      phone:new FormControl(null,[Validators.required]),
    })
  }
  

  proceedRegister(){
    if(this.registerForm.valid){
      console.log(this.registerForm);
      if(this.registerForm.value.password === this.registerForm.value.confirmpassword ){
        const userData:Users = {
          name:this.registerForm.value.name as string,
          email:this.registerForm.value.email as string,
          password:this.registerForm.value.password as string,
          phone:this.registerForm.value.phone as string,
          gender:this.registerForm.value.gender as string,
          role:'user'
        }
        this.store.dispatch(beginRegister({userData:userData}));
      }else{
        this.store.dispatch(showAlert({message:'Password Mismatch',resultType:'fail'}))
      }
    }
  }
  

  duplicateUserFtn(){
    const email = this.registerForm.value.email as string;
    if(email !== null){
      this.store.dispatch(duplicateUser({userEmail:email}));
      this.store.select(isDuplicateUser).subscribe((item)=>{
        const isExist = item;
        console.log(isExist);
        if(isExist){
          this.registerForm.controls['email'].reset();
        }
      })
    }
  }
}
