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
                this.DL.ngZone.run(() => {
                    let exists = this.DL.Recipes.find(i => i.id == item.id);
                    if(exists == null)
                        this.DL.Recipes.push(item)
                    else
                        exists.Name = item.Name;
                });
            },
            this.PATH,
                { orderBy: {
                type: firebase.QueryOrderByType.CHILD,
                value: 'Name'
            }
        });
    }

    public Save(item: RecipeInfo) {
        console.log("item: " + item.id + " " + item.Name);
        if(!item.id)
            firebase.push(this.PATH, item);
        else
            firebase.update(this.PATH + "/" + item.id, item);
    }
}