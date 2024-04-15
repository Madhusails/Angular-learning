import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CAN_ROUTES } from './employee/employee.routes';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
        pathMatch: 'prefix'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), EmployeeModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }