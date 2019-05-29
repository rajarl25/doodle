import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule, MatProgressBarModule, MatButtonModule
} from '@angular/material';
import { MainHeaderComponent } from './main-header.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [MainHeaderComponent],
  exports: [MainHeaderComponent]
})
export class MainHeaderModule { }
