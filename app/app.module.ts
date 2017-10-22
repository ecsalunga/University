import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { Core } from "./core";
import { DataAccess, DataLayer } from "./data";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
import { RecipeListComponent } from "./recipe/list/recipe-list.component";
import { RecipeLocalComponent } from "./recipe/local/recipe-local.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule
    ],
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeLocalComponent
    ],
    providers: [
        Core,
        DataAccess,
        DataLayer
    ],
    entryComponents: [
        RecipeListComponent,
        RecipeLocalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
