import { Injectable, NgZone } from '@angular/core';
import { Core } from "../core";
import { RecipeInfo } from "./";

@Injectable()
export class DataLayer {
    TITLE: string;

    Recipe: RecipeInfo;
    Recipes: Array<RecipeInfo>;

    constructor(private core: Core, public ngZone: NgZone) {}

    public LoadComponent(selector: string) {
        this.core.LoadComponent(selector);
    }
}