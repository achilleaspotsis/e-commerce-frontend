import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/http/auth.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
    selector: 'app-update-password',
    templateUrl: './update-password.component.html',
    styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

    public form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.initForm();
    }

    public initForm() {
        this.form = this.fb.group({
            oldPassword: ['', [Validators.required, Validators.minLength(6)]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    public onSubmit() {
        console.log(this.form.value);
        this.userService.updatePassword(this.form.value)
            .subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        alert('Your password has been updated successfully');
                        this.authService.logout();
                    }
                },
                error: (response) => {
                    alert(response.error.message);
                }
            });
    }
}
