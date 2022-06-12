import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRegisterData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public form!: FormGroup;

    public errors: string = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

    public initForm() {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    public onSubmit () {
        this.authService.register(this.form.value)
            .subscribe({
                next: (response) => {
                    if (response.status === 201) {
                        alert('You have successfully registered');
                        this.router.navigate(['/login']);
                    }
                },
                error: (response) => {
                    alert(response.error?.message)
                }
            });
    }

}
