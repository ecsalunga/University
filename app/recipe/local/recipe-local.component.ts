import { Component, OnInit } from '@angular/core';
import { DataLayer } from "../../data";

@Component({
  moduleId: module.id,
  selector: 'recipe-local',
  templateUrl: './recipe-local.component.html',
  styleUrls: ['./recipe-local.component.scss']
})
export class RecipeLocalComponent implements OnInit {

  constructor(private DL: DataLayer) { }
  
  ngOnInit() { 
    this.DL.TITLE = "Local Recipes ";
  }
}
