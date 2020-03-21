import {Injectable} from "@angular/core";
import {Router, CanActivate} from  "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class UserGuard implements CanActivate{
	constructor(
		private _router: Router,
		private _userService: UserService
		){

	}

	canActivate():boolean {
		let identity = this._userService.getIdentity();

		if(identity && (identity.rol == 'usuario' || identity.rol == 'administrador')){
			return true;
		}else{
			this._router.navigate(['/login']);
			return false;
		}
	}
}