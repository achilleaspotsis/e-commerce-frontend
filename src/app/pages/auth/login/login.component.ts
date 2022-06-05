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

    form: FormGroup;

    errors: string = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private ls: LocalStorageService
    ) {
        // Had to initialize the form inside the constructor to remove an error
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
        // console.log(this.form);
        // this.form.valueChanges.subscribe()
    }

    onSubmit () {
        this.authService.login(this.form.value)
            .subscribe(response => {
                    if (response.status === 200) {
                        alert('You have successfully logged in');
                        this.ls.store('token', response.body?.token);
                        this.ls.store('user', response.body?.user);
                        this.router.navigate(['/me']);
                    } else {
                        alert('Something went wrong..');
                    }
                }
            );
    }

}
