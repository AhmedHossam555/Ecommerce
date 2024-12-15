import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _UserService = inject(UserService);
  const _Router = inject(Router);
  if(_UserService.userInformation.getValue() !== null){
    return true;
  }else{
    _Router.navigate(['/login']);
    return false;
  }
};
