import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../../app/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    role: number;
    constructor(private router: Router,private _service:UserService) {
        this._service.roleEntity.subscribe(y => this.role = y)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this._service.userValue && this.role===1 ;  
        if (user) {
         
            return true;
        }


        this.router.navigate(['/hometravel'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
