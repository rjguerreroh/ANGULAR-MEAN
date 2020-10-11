import { PagesComponent } from './pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'grafica1', component: Grafica1Component},
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NopagefoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

/**
 * RouterModule.forRoot( routes ) : Aqui se define las rutas principales
 */
export class AppRoutingModule { }
