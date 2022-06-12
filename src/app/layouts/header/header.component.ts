import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthenticateService } from 'src/app/services/general/authenticate.service';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public user: Partial<User> = {};

    constructor(
        public authenticateService: AuthenticateService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
    }

    public logoutUser() {
        this.authService.logout();
    }

}
