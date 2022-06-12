import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePasswordRoutingModule } from './update-password-routing.module';
import { UpdatePasswordComponent } from './update-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        UpdatePasswordComponent,
    ],
    imports: [
        CommonModule,
        UpdatePasswordRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UpdatePasswordModule { }
