import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addAssociate, updateUser } from 'src/app/Store/Associate/associate.actions';
import { getEditUser } from 'src/app/Store/Associate/associate.selectors';
import { Associate } from 'src/app/Store/Model/Associate.model';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css'],
})
export class AddassociateComponent implements OnInit {

  title:string = 'Create Associate'
  isedit:boolean = false;
  dialogdata:any;
  userId!:string;


  constructor(private builder: FormBuilder, private ref:MatDialogRef<AddassociateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private store:Store) {}


  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getEditUser).subscribe((res)=>{
      this.userId = res._id as string;
      if(this.userId){
        this.isedit = true;
      }
      this.associateForm.setValue({
        name:res.name,
        email:res.email,
        phone:res.phone,
        password:res.password,
        gender:res.gender,
      })
    })
  }

  associateForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control('',Validators.compose([Validators.email, Validators.required])),
    password:this.builder.control('',Validators.compose([Validators.required])),
    phone: this.builder.control('', Validators.required),
    gender: this.builder.control(''),
  });

  SaveAssociate(){
    if(this.associateForm.valid){
      let obj:Associate = {
        name:this.associateForm.value.name as string,
        email:this.associateForm.value.email as string,
        password:this.associateForm.value.password as string,
        phone:this.associateForm.value.phone as string,
        gender:this.associateForm.value.gender as string
      }
      if(!this.isedit){
        this.store.dispatch(addAssociate({inputData:obj}))
      }else{
        this.store.dispatch(updateUser({inputData:obj,id:this.userId}));
      }  
      this.ClosePopup();
    }
  }

  ClosePopup(){
    this.ref.close();
  }
}
