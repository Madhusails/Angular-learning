import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

export const CAN_ROUTES: Routes = [
    {
    path:'',
    children: [
        { path: '', component: EmployeeComponent },
    ],

},
{
    path: 'interview-builder/employee',
    children: [
        { path: '', component: EmployeeComponent },

],
},
]