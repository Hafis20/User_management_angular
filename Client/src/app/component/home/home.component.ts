import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { UserInfo } from 'src/app/Store/Model/user.model';
import { Store} from '@ngrx/store'
import { uploadUserImage } from 'src/app/Store/User/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck{
  constructor(private service:UserService,private store:Store){}

  userData!:UserInfo;
  userImage:string = 'assets/images/profile.jpeg'
  showUploadBox :boolean = false;
  ngOnInit(){
    this.userData = this.service.getUserDataFromStorage();
    if(this.userData.image){
      this.userImage = this.userData.image;
    }
  }

  ngDoCheck(){
    this.userData = this.service.getUserDataFromStorage();
    if(this.userData.image){
      this.userImage = this.userData.image;
    }
  }

  uploadClicked(){
    this.showUploadBox = !this.showUploadBox;
  }

  UploadImage(event:any){
    this.showUploadBox = !this.showUploadBox;

    const file = event.target.files[0];
    console.log(file)
    if(file){
      const form = new FormData();
      form.append("img",file);
      form.append('id',(this.userData._id)as string);
      // console.log(form)
      this.store.dispatch(uploadUserImage({data:form}));
      
    }
  }
}
