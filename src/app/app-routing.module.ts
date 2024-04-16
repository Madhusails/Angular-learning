import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleModule } from './sample/sample.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule),
        pathMatch: 'prefix'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), SampleModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }