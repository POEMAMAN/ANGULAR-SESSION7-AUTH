import { CanActivateFn, Router } from '@angular/router';
//traerse el injector (similar al constructor), se usa cuando no tenemos una clase
import { inject } from '@angular/core';

export const verifyTokenGuard: CanActivateFn = (route, state) => {
  //esto retorna dos cosas, un booleano o un observable que retorna un booleano.
  const token = sessionStorage.getItem('token-products');
  const router = inject(Router)
  

  if (!token){
    router.navigate(['login'])
    return false
  }

  return true;
};
