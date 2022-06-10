import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/http/user.service';

@Component({
    selector: 'app-single-user',
    templateUrl: './single-user.component.html',
    styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

    public userId: string = '';

    public user!: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        console.log(this.userId);
        this.route.params.subscribe(params => {
            this.userId = params['userId'];
            console.log(this.userId);
            this.userService.getSingleUser(this.userId).subscribe({
                next: (response) => {
                    if (response.status === 200) {      
                        this.user = response.body?.user;
                    }
                },
                error: (response) => {
                    alert(response.error?.message);
                }
            });
        })
    }

}
