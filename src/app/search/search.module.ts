import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { ListadoComponent } from './../listado/listado.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent,
        ListadoComponent
    ],/*,
    declarations: [
        AppComponent
    ],*/
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
