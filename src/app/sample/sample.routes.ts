import { Component } from "@angular/core";
import { SampleComponent } from "./sample.component";
import { Routes } from '@angular/router';

export const SAM_ROUTES: Routes = [
    {
        path:'',
        children: [
            { path: '', component: SampleComponent },
        ],
    },
    {
        path: 'interview-builder/sample',
        children: [
            { path: '', component:SampleComponent },
        ],
    },
]