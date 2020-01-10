import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HotelesRoutingModule } from "./hoteles-routing.module";
import { HotelesComponent } from "./hoteles.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HotelesRoutingModule
    ],
    declarations: [
        HotelesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HotelesModule { }
