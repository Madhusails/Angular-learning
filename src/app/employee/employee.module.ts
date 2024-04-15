import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from "@angular/router";
import { CAN_ROUTES } from "./employee.routes";


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CAN_ROUTES),  
  ]
})
export class EmployeeModule { }
