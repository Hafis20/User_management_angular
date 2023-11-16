import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserCredential, UserInfo, Users, uploadImage } from '../Store/Model/user.model';
import { userBaseUrl } from '../serverUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  // Setting user data in to local storage
  setUserToLocalStorage(userData:UserInfo){
    localStorage.setItem('userData',JSON.stringify(userData));
  }

  getUserDataFromStorage(){
    let _data:UserInfo={
      _id:'',
      name:'',
      email:'',
      role:'',
    }

    if(localStorage.getItem('userData') !== null){
      let jsonString = localStorage.getItem('userData') as string;
      _data = JSON.parse(jsonString);
      return _data;
    }else{
      return _data;
    }
  }

  getUserTokenFromStorage(){
    return window.localStorage.getItem('token');
  }


  // Server side calling 

  registerUser(userData:Users):Observable<Users>{
    return this.http.post<Users>(`${userBaseUrl}/registerUser`,userData);
  }

  loginUser(userCredential:UserCredential):Observable<UserInfo[]>{
    return this.http.post<UserInfo[]>(`${userBaseUrl}/loginUser`,userCredential);
  }

  duplicateEmail(userEmail:string):Observable<UserCredential[]>{
    return this.http.get<UserCredential[]>(`${userBaseUrl}/duplicateEmail/?email=${userEmail}`);
  }

  uploadProfile(data:FormData):Observable<UserInfo>{
    return this.http.post<UserInfo>(`${userBaseUrl}/uploadImage`,data);
  }

}
