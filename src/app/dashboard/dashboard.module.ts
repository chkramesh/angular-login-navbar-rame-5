import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
     DashboardHomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    SharedModule,
    UserModule
  ]
})
export class DashboardModule { }
