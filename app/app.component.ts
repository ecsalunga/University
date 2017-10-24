import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Core } from "./core";
import { DataLayer, DataAccess, RecipeInfo } from "./data";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
    @ViewChild('viewChild', {read: ViewContainerRef})
    viewChild: ViewContainerRef;

    constructor(public core: Core, public DA: DataAccess, public DL: DataLayer) { }

    public LoadComponent(selector: string) {
        this.core.LoadComponent(selector);
    }
    
    public IsDetail(): boolean {
        return this.core.selector == "recipe-detail";
    }

    public Add() {
        this.DL.Recipe = null;
        this.LoadComponent("recipe-detail");
    }

    public Save() {
        this.DA.RecipeSave();
        this.loadList();
    }

    public Cancel() {
        this.loadList();
    }

    private loadList() {
        this.LoadComponent("recipe-list");
    }

    ngOnInit() {
        this.DA.Load();
        this.DL.TITLE = "Recipe Helper";
        this.core.viewChild = this.viewChild;
        this.loadList();
    }
}