import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
  providers: [RecipeService]
})
export class StoreListComponent implements OnInit {
  allstores = null;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.allstores=this.recipeService.getRecipes();
  }

}
