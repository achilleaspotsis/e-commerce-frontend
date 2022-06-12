import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthLoginData, AuthRegisterData } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private ls: LocalStorageService,
        private router: Router
    ) { }
    
    public register(data: AuthRegisterData): Observable<any> {
        return this.http.post(`${environment.apiUrl}/auth/register`, data, {observe: 'response'});
    }
    
    public login(data: AuthLoginData): Observable<any> {
        return this.http.post(`${environment.apiUrl}/auth/login`, data, {observe: 'response', withCredentials: true});
    }

    public logout() {
        this.http.get(`${environment.apiUrl}/auth/logout`, {observe: 'response'}).subscribe(response => {
            if (response.status === 200) {
                this.ls.clear('token');
                this.ls.clear('user');
                this.router.navigate(['/login']);
            }
        });
    }
}
