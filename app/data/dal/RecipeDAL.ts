import { RecipeInfo, DataLayer } from "../";
import firebase = require("nativescript-plugin-firebase");

export class RecipeDAL {
    PATH: string = "/recipe/items";

    constructor(private DL: DataLayer) { }

    public Load() {
        this.DL.Recipes = new Array<RecipeInfo>();
        firebase.query(fb => {
                let item:RecipeInfo = fb.value;
                item.id = fb.key;
                this.DL.Recipes.push(item)
            },
            this.PATH,
                { orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'Name'
            }
        });
    }

    public Save(item: RecipeInfo) {
        if(!item.id)
            firebase.push(this.PATH, item);
        else
            firebase.update(this.PATH + "/" + item.id, item);
    }
}