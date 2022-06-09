import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from 'src/app/guards/permission.guard';
import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: '', component: UsersComponent, canActivate: [PermissionGuard] },
    { path: 'me', loadChildren: () => import('./me/me.module').then(m => m.MeModule) },
    { path: 'update', loadChildren: () => import('./update/update.module').then(m => m.UpdateModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
