import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackModule } from 'ngx-img-fallback';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ImgFallbackModule
    ]
})
export class UsersModule { }
