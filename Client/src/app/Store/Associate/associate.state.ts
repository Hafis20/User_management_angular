import { AssociateModel } from "../Model/Associate.model";

export const AssociateState:AssociateModel = {
   list:[],
   errorMessage:'',
   associateobj:{
      _id:'',
      name:'',
      email:'',
      password:'',
      phone:'',
      gender:''
   }
}