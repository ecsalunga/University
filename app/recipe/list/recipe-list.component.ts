import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataLayer, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  public countries: Array<RecipeInfo>;

  constructor(private DL: DataLayer) { 
    this.countries = new Array<RecipeInfo>();
    this.DL.Recipes.forEach(item => {
      this.countries.push(new RecipeInfo(item.Name));
    });
  }

  public SelectItem(item) {
    console.log("Item Selected: " + item.Name);
  }

  ngOnInit() { 
    this.DL.TITLE = "Online Recipes";
  }
}
