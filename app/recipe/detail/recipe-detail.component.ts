import { Component, OnInit } from '@angular/core';
import { Core } from "../../core";
import { DataLayer, DataAccess, RecipeInfo } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public model: RecipeInfo;

  constructor(public core: Core, private DA: DataAccess, private DL: DataLayer) {
    if(this.DL.Recipe == null)
      this.model = new RecipeInfo();
    else
      this.model = this.DL.Recipe;
  }

  Save() {
    console.log(this.model.Name);
    this.DA.RecipeSave(this.model);
    this.core.LoadComponent("recipe-list");
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Recipe Details";
  }
}
