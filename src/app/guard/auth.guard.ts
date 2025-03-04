import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router)
  if (sessionStorage.getItem('token')) {
    // Authorized user
    return true;
  } else {
    // Unauthorized user
    alert(`Unauthorized access... Please login`)
    router.navigateByUrl('/login')
    return false
  }


};
