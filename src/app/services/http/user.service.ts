import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public getAllUsers(): Observable<HttpResponse<any>> {
        return this.http.get(`${environment.apiUrl}/users`, {observe: 'response'});
    }

    public updateUser(data: any): Observable<any> {
        return this.http.patch(`${environment.apiUrl}/users/update-user`, data, {observe: 'response'});
    }

    public getSingleUser(id: string): Observable<any> {
        return this.http.get(`${environment.apiUrl}/users/${id}`, {observe: 'response'});
    }

}
