import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authUserGuard } from './guard/auth.guard';
import { adminAuthGuard } from './guard/admin-auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[authUserGuard]},
  {path:'admin', component: AssociatelistingComponent ,canActivate:[adminAuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
