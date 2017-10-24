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

  constructor(public core: Core, private DA: DataAccess, private DL: DataLayer) {
    if(this.DL.Recipe == null)
      this.DL.Recipe = new RecipeInfo();
  }
  
  ngOnInit() { 
    this.DL.TITLE = "Recipe Details";
  }
}
