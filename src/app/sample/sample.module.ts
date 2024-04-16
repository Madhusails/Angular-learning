import { CommonModule } from "@angular/common";
import { SAM_ROUTES } from "../sample/sample.routes";
import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(SAM_ROUTES),
        ReactiveFormsModule
    ]
})
export class SampleModule { 
}