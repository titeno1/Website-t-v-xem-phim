import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.KiemTraDangNhapAdmin();
    if (this.auth._isLoginAdmin) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
  constructor(private auth: AuthService, private router: Router) { }
}
