import { Injectable } from '@angular/core';
import { DataLayer } from "./";

import { RecipeDAL, RecipeInfo } from "./";

@Injectable()
export class DataAccess {
    RecipeDAL: RecipeDAL;

    constructor(private DL: DataLayer) {
        this.RecipeDAL = new RecipeDAL(this.DL);
    }

    public Load() {
        this.RecipeDAL.Load();
    }
}