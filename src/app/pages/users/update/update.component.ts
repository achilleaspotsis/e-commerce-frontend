import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from 'src/app/services/http/user.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

    public user: any = {};

    public form: FormGroup;

    public errors: string = '';

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private ls: LocalStorageService
    ) {
        // Had to initialize the form inside the constructor to remove an error
        this.form = this.fb.group({
            name: [this.user.name, [Validators.required, Validators.minLength(3)]],
            email: [this.user.email, [Validators.required, Validators.email]]
        });
    }

    ngOnInit(): void {
        this.user = this.ls.retrieve('user');
    }

    async onSubmit () {
        this.userService.updateUser(this.form.value)
            .subscribe(
                (response) => {
                    if (response.status === 200) {
                        alert('You have updated your info');
                        this.ls.store('token', response.body?.token);
                        this.ls.store('user', response.body?.user);
                    } else {
                        alert('Something went wrong..');
                    }
                }
            );
    }

}
