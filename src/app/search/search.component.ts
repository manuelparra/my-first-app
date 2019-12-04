import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { NoticiasService } from "../domain/noticias.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html" /*,
    declarations: [
        AppComponent
    ],*/
})
export class SearchComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        console.log("probando");
        console.log({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
        console.dir({nombre: {nombre: {nombre: {nombre: "pepe"}}}});
        console.log([1, 2, 3]);
        console.dir([4, 5, 6]);

        if (page.android) {
            this.noticias.agregar("Hola 1!");
            this.noticias.agregar("Hola 2!");
            this.noticias.agregar("Hola 3!");
      }
  }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
