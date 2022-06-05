import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
    providedIn: 'root'
})
export class AuthenticateService {

    constructor(
        private ls: LocalStorageService
    ) { }

    public isAuthenticated(): boolean {
        const token = this.ls.retrieve('token');

        if (token) {
            return true;
        }
        
        return false;
    }
}
