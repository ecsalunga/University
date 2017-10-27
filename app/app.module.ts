import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { AppComponent } from "./app.component";
import { Core } from "./core";
import { DataAccess, DataLayer } from "./data";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
import { RecipeListComponent } from "./recipe/list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/detail/recipe-detail.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeDetailComponent
    ],
    providers: [
        Core,
        DataAccess,
        DataLayer
    ],
    entryComponents: [
        RecipeListComponent,
        RecipeDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
