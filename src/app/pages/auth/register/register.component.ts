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

    form: FormGroup;

    errors: string = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        // Had to initialize the form inside the constructor to remove an error
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
        console.log(this.form);
        this.form.valueChanges.subscribe()
    }

    async onSubmit () {
        this.authService.register(this.form.value)
            .subscribe(
                (response) => {
                    if (response.status === 201) {
                        alert('You have successfully registered');
                        this.router.navigate(['/login']);
                    } else {
                        alert('Something went wrong..');
                    }
                }
            );
    }

}
