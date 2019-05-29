import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderModule } from '../main-header/main-header.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MainHeaderModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
