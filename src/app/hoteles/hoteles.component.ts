import { Component, OnInit } from '@angular/core';
import { HotelesService } from "../domain/hoteles.service";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application";

import { filter } from "rxjs/operators";

@Component({
    selector: 'ns-hoteles',
    templateUrl: './hoteles.component.html',
    styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
    private _activatedUrl: string;

    constructor(private hoteles: HotelesService, private router: Router, private routerExtensions: RouterExtensions) { }

    ngOnInit(): void {
        this.hoteles.add("Eurobuilding Caracas");
        this.hoteles.add("Tamanaco International");
        this.hoteles.add("Renaissanse La Castellana");

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

    refreshList(args) {
        console.log(args);
        const pullRefresh = args.object;
        setTimeout(function () {
            this.hoteles.add("Hotel Maruma");
            console.log(this.hoteles);
            pullRefresh.refreshing = false;
        }, 1000);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
