import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Core } from "./core";
import { DataLayer, DataAccess, RecipeInfo } from "./data";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
    @ViewChild('viewChild', {read: ViewContainerRef})
    viewChild: ViewContainerRef;

    myItems: Array<SegmentedBarItem>;

    constructor(public core: Core, public DA: DataAccess, public DL: DataLayer) { 
        this.myItems = [];
        let item = new SegmentedBarItem();
        item.title = "Local Recipes";
        this.myItems.push(item);

        item = new SegmentedBarItem();
        item.title = "Online Recipes";
        this.myItems.push(item);
    }

    public LoadComponent(selector: string) {
        this.core.LoadComponent(selector);
    }

    Save() {
        let recipe = new RecipeInfo("Adobo");
    }

    public onSelectedIndexChange(args) {
        let segmetedBar = <SegmentedBar>args.object;

        if(segmetedBar.selectedIndex == 0)
            this.LoadComponent("recipe-local");
        else
            this.LoadComponent("recipe-list");
    }

    ngOnInit() {
        this.DA.Load();
        this.DL.TITLE = "Recipe Helper";
        this.core.viewChild = this.viewChild;
    }
}