import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { UserService } from '../Service/user.service';
import { UserInfo } from '../Store/Model/user.model';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);

  const userinfo:UserInfo = service.getUserDataFromStorage();

  if(userinfo.role === 'admin'){
    return true;
  }else{
    router.navigate(['login'])
    return false;
  }
};
