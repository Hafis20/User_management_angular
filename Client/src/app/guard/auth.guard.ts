import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { UserInfo } from '../Store/Model/user.model';

export const authUserGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);

  const userinfo:UserInfo = service.getUserDataFromStorage()

  if(userinfo._id != '' && userinfo._id != null){
    // router.navigate([''])
    return true;
  }else{
    router.navigate(['login'])
    return false;
  }
};
