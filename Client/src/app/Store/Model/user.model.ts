import { EntityState } from "@ngrx/entity";

export interface Users{
   _id?:string;
   name:string;
   email:string;
   password:string;
   gender:string;
   phone:string;
   role:string;
   image?:string;
}

export interface UserCredential{
   email:string;
   password:string;
}

export interface UserInfo{
   _id?:string;
   name:string;
   email:string;
   role:string;
   image?:string;
}

export interface uploadImage{
   imageUrl:File;
   id:string;
}

export interface UserModel extends EntityState<Users>{
   isDuplicate:boolean;
}
