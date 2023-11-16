import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { adminBaseUrl } from '../serverUrl';
import { Associate } from '../Store/Model/Associate.model';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {


  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<Associate[]>(`${adminBaseUrl}/getAllUsers`);
  }


  createUser(data:Associate){
    return this.http.post<Associate>(`${adminBaseUrl}/createUser`,data);
  }

  editUser(id:string){
    return this.http.get<Associate>(`${adminBaseUrl}/getEditUser/?id=${id}`);
  }

  updateUser(id:string,data:Associate){
    return this.http.post<Associate>(`${adminBaseUrl}/updateUser/?id=${id}`,data);
  }

  deleteUser(id:string){
    return this.http.get<Associate>(`${adminBaseUrl}/deleteUser/?id=${id}`);
  }
}
