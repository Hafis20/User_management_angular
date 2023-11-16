import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddassociateComponent } from '../addassociate/addassociate.component';
import { Store } from '@ngrx/store';
import { Associate } from 'src/app/Store/Model/Associate.model';
import { getAssociateList } from 'src/app/Store/Associate/associate.selectors';
import { deleteUser, getEditUser, loadAssociate, openPopup } from 'src/app/Store/Associate/associate.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-associatelisting',
  templateUrl: './associatelisting.component.html',
  styleUrls: ['./associatelisting.component.css']
})
export class AssociatelistingComponent implements OnInit {

  AssociateList!:Associate[];
  SearchAssociateList!:Associate[];
  searchQuery:string = '';
  dataSource:any;
  displayedColums:string[] = ['name','email','gender','phone','action']
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private store:Store){
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadAssociate());
    this.store.select(getAssociateList).subscribe(item => {
      this.AssociateList = item;
      this.SearchAssociateList = item;
      this.dataSource = new MatTableDataSource<Associate>(this.AssociateList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.AssociateList);
    });
  }

  FunctionAdd(){
    this.OpenPopup(0,'Create User')
  }

  // Search User 
  applySearch(){
    const text = this.searchQuery.trim().toLocaleLowerCase();
    this.AssociateList = this.SearchAssociateList.filter((user)=>{
      const userName = user.name.toLocaleLowerCase();
      return userName.includes(text);
    })
    this.dataSource = new MatTableDataSource<Associate>(this.AssociateList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }


  // Edit feature function
  editFunction(userId:string){
    this.OpenPopup(0,'Edit User');
    this.store.dispatch(getEditUser({id:userId}));
  }

  // Delete feature funtion
  deleteFunction(userId:string){
    if(confirm('Do you want to remove?')){
      this.store.dispatch(deleteUser({id:userId}));
    }
  }

  // Popup logic function

  OpenPopup(code:number,title:string){
    this.store.dispatch(openPopup());
    this.dialog.open(AddassociateComponent,{
      width:"50%",
      enterAnimationDuration:"1000ms",
      exitAnimationDuration:'1000ms',
      data:{
        code:code,
        title:title
      }
    })

  }
}
