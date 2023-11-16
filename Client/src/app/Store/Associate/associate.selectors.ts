import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociateModel } from "../Model/Associate.model";


const getAssociateState = createFeatureSelector<AssociateModel>('associate');

export const getAssociateList = createSelector(getAssociateState,state=>{
   return state.list;
})

// Edit user selector
export const getEditUser = createSelector(getAssociateState,state=>{
   return state.associateobj;
})