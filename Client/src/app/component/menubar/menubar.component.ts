import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { UserInfo } from 'src/app/Store/Model/user.model';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements DoCheck {
  isMenuVisible: boolean = false;
  isAdmin: boolean = false;

  constructor(private router: Router, private service: UserService) {}

  ngDoCheck(): void {
    const route = this.router.url;
    if (route === '/login' || route === '/register') {
      this.isMenuVisible = false;
    } else {
      const userData:UserInfo = this.service.getUserDataFromStorage();
      if(userData.role === 'admin'){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }
      this.isMenuVisible = true;
    }
  }
}
