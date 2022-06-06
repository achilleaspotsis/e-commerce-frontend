import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
      private ls: LocalStorageService
  ) { }

  public isAdmin(): boolean {
      const user = this.ls.retrieve('user');

      if (user && user.role === 'admin') {
          return true;
      }

      return false;
  }
}
