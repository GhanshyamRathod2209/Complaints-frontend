import { Routes } from '@angular/router';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComplaintListComponent } from './complaints/complaint-list/complaint-list.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'complaintslist',
    component: ComplaintListComponent,
    canActivate: [authGuard]
  },
  {
    path:'complaints',
    component:ComplaintComponent,
    canActivate:[authGuard]
  }

];