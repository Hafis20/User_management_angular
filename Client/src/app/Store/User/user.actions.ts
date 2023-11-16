import { createAction, props } from "@ngrx/store";
import { UserCredential, UserInfo, Users, uploadImage } from "../Model/user.model";

export const BEGIN_REGISTER  = '[auth] begin register';
export const BEGIN_LOGIN  = '[auth] begin login';
export const BEGIN_LOGIN_SUCCESS = '[auth] begin login success'
export const DUPLICATE_USER = '[auth] duplicate user'
export const DUPLICATE_USER_SUCCESS = '[auth] duplicate user success'
export const PROFILE_IMAGE_UPLOAD = '[profile] upload user image'
export const PROFILE_IMAGE_UPLOAD_SUCCESS = '[profile] upload user image success'


export const beginRegister = createAction(BEGIN_REGISTER,props<{userData:Users}>());
export const beginLogin = createAction(BEGIN_LOGIN,props<{userCredential:UserCredential}>());
// export const beginLoginSuccess = createAction(BEGIN_LOGIN_SUCCESS,props<{userinfo:UserInfo}>());
export const duplicateUser = createAction(DUPLICATE_USER,props<{userEmail:string}>());
export const duplicateUserSuccess = createAction(DUPLICATE_USER_SUCCESS,props<{isDuplicate:boolean}>());

export const uploadUserImage = createAction(PROFILE_IMAGE_UPLOAD,props<{data:FormData}>());

