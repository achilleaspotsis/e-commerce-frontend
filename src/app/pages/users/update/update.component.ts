import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from 'src/app/services/http/user.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

    public user: any = {};

    public form!: FormGroup;

    public errors: string = '';

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private ls: LocalStorageService,
        private router: Router
    ) {
        // Had to initialize the form inside the constructor to remove an error
        // this.form = this.fb.group({
        //     name: [{value: this.user.name}, [Validators.required, Validators.minLength(3)]],
        //     email: [{value: this.user.email}, [Validators.required, Validators.email]]
        // });
    }

    ngOnInit() {
        this.user = this.ls.retrieve('user');
        this.formInit();
    }

    private formInit() {
        this.form = this.fb.group({
            name: [this.user.name, [Validators.required, Validators.minLength(3)]],
            email: [this.user.email, [Validators.required, Validators.email]]
        });
    }

    async onSubmit () {
        this.userService.updateUser(this.form.value)
            .subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        
                        this.ls.store('token', response.body?.token);
                        this.ls.store('user', response.body?.user);
                    }
                },
                error: (response) => {
                    alert(response.error.message);
                },
                complete: () => {
                    alert('Your info has been updated successfully');
                    this.router.navigate(['/users/me']);
                }
            });
    }

}
