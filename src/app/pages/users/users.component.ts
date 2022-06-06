import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/http/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: User[] = [];

    constructor(
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(response => {
            if (response.status === 200) {
                this.users = response.body?.users;
            }
        })
    }

}
