import { Component, OnInit } from '@angular/core';
import { NoticiasService } from "../domain/noticias.service";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { filter } from "rxjs/operators";

@Component({
    selector: 'ns-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
    private _activatedUrl: string;

    constructor(private noticias: NoticiasService, private router: Router, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.noticias.agregar("Hola 1!");
        this.noticias.agregar("Hola 2!");
        this.noticias.agregar("Hola 3!");
        this.noticias.agregar("Hola 4!");

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    onItemTap(x): void {
        console.dir(x);
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }
}
