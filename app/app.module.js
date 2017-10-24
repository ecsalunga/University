"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var core_2 = require("./core");
var data_1 = require("./data");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var recipe_list_component_1 = require("./recipe/list/recipe-list.component");
var recipe_detail_component_1 = require("./recipe/detail/recipe-detail.component");
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent
            ],
            providers: [
                core_2.Core,
                data_1.DataAccess,
                data_1.DataLayer
            ],
            entryComponents: [
                recipe_list_component_1.RecipeListComponent,
                recipe_detail_component_1.RecipeDetailComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFvRTtBQUNwRSxpREFBK0M7QUFDL0MsK0JBQThCO0FBQzlCLCtCQUErQztBQUUvQywyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFDdEUsNkVBQTBFO0FBQzFFLG1GQUFnRjtBQThCaEY7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBN0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLCtDQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxXQUFJO2dCQUNKLGlCQUFVO2dCQUNWLGdCQUFTO2FBQ1o7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsMkNBQW1CO2dCQUNuQiwrQ0FBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29yZSB9IGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YUFjY2VzcywgRGF0YUxheWVyIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgUmVjaXBlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3JlY2lwZS9saXN0L3JlY2lwZS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWNpcGVEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9yZWNpcGUvZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgUmVjaXBlRGV0YWlsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29yZSxcclxuICAgICAgICBEYXRhQWNjZXNzLFxyXG4gICAgICAgIERhdGFMYXllclxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIFJlY2lwZUxpc3RDb21wb25lbnQsXHJcbiAgICAgICAgUmVjaXBlRGV0YWlsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=