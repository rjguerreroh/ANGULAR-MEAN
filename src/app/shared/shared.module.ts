import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
