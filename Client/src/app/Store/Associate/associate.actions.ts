import { createAction, props } from "@ngrx/store";
import { Associate } from "../Model/Associate.model";

// Loading the page
export const LOAD_ASSOCIATE = '[associate page] load associate';
export const LOAD_ASSOCIATE_SUCCESS = '[associate page] load associate success';
export const LOAD_ASSOCIATE_FAIL = '[associate page] load associate fail';
// Adding a user 
export const ADD_ASSOCIATE = '[associate page] add associate';
export const ADD_ASSOCIATE_SUCCESS = '[associate page] add associate success';
// To getting an individual user
export const GET_ASSOCIATE = '[associate page] get associate';
export const GET_ASSOCIATE_SUCCESS = '[associate page] get associate success';
// To update the user
export const UPDATE_ASSOCIATE = '[associate page] update associate';
export const UPDATE_ASSOCIATE_SUCCESS = '[associate page] update associate success';
// To Delete the user 
export const DELETE_ASSOCIATE = '[associate page] delete associate';
export const DELETE_ASSOCIATE_SUCCESS = '[associate page] delete associate success';
// Popup action 
export const POPUP_ACTION = '[associate page] popup action'


export const loadAssociate = createAction(LOAD_ASSOCIATE);
export const loadAssociateSuccess = createAction(LOAD_ASSOCIATE_SUCCESS,props<{list:Associate[]}>());
export const loadAssociateFail = createAction(LOAD_ASSOCIATE,props<{errorMessage:string}>());


export const addAssociate = createAction(ADD_ASSOCIATE,props<{inputData:Associate}>());
export const addAssociateSuccess = createAction(ADD_ASSOCIATE_SUCCESS,props<{inputData:Associate,id:string}>())


export const getEditUser = createAction(GET_ASSOCIATE,props<{id:string}>());
export const getEditUserSuccess = createAction(GET_ASSOCIATE_SUCCESS,props<{obj:Associate}>());

export const updateUser = createAction(UPDATE_ASSOCIATE,props<{inputData:Associate,id:string}>());
export const updateUserSuccess = createAction(UPDATE_ASSOCIATE_SUCCESS,props<{userData:Associate}>());

export const deleteUser = createAction(DELETE_ASSOCIATE,props<{id:string}>());
export const deleteUserSuccess = createAction(DELETE_ASSOCIATE_SUCCESS,props<{id:string}>());


export const openPopup = createAction(POPUP_ACTION);
