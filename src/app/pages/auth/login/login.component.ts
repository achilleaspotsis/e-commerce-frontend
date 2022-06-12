import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private ls: LocalStorageService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    public initForm() {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    public onSubmit () {
        this.authService.login(this.form.value)
            .subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        alert('You have successfully logged in');
                        this.ls.store('token', response.body?.token);
                        this.ls.store('user', response.body?.user);
                        this.router.navigate(['/users/me']);
                    }
                },
                error: (response) => {
                    alert(response.error?.message)
                }
            });
    }

}
