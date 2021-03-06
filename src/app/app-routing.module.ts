import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then(m => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then(m => m.BrowseModule) },
    { path: "news", loadChildren: () => import("~/app/news/news.module").then(m => m.NewsModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then(m => m.SearchModule) },
    { path: "detalle", loadChildren: () => import("~/app/detalle/detalle.module").then(m => m.DetalleModule) },
    { path: "hoteles", loadChildren: () => import("~/app/hoteles/hoteles.module").then(m => m.HotelesModule) },
    { path: "comments", loadChildren: () => import("~/app/comments/comments.module").then(m => m.CommentsModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "account", loadChildren: () => import("~/app/account/account.module").then(m => m.AccountModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then(m => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
