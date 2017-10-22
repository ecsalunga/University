import { Injectable } from '@angular/core';
import { RecipeInfo } from "./";

@Injectable()
export class DataLayer {
    TITLE: string;

    Recipe: RecipeInfo;
    Recipes: Array<RecipeInfo>;
}