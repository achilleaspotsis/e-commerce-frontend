import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/users/all/all.component';
import { MeComponent } from './pages/users/me/me.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [IsLoggedInGuard]},
    { path: 'login', component: LoginComponent, canActivate: [IsLoggedInGuard]},
    
    // users-related
    { path: 'users', component: AllComponent, canActivate: [AuthGuard] },
    { path: 'me', component: MeComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
