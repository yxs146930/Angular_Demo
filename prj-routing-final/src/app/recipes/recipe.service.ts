import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chanel',
      'Six collections are presented by Karl Lagerfeld each year',
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chanel_logo_interlocking_cs.svg/1200px-Chanel_logo_interlocking_cs.svg.png',
      [
        new Ingredient('New York', 10),
        new Ingredient('Alenta', 5)
      ]),
    new Recipe('Dior',
      'Not only leather, but also fragrance',
      'https://forfashionfreaks.files.wordpress.com/2014/08/christian-dior-company-logo.jpg',
      [
        new Ingredient('Boston', 5),
        new Ingredient('San Francisco', 5)
      ]),
      new Recipe('Louis Vuitton',
      'Travel is the eternal source of inspiration within the Louis Vuitton universe',
      'http://www.sgcustomerservicenumbers.com/wp-content/uploads/2016/12/Louis-Vuitton-Logo.jpg',
      [
        new Ingredient('New York', 7),
        new Ingredient('Los Angles', 6)
      ]),
      
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  
  getRecipe(index: number) {
    if (index > this.recipes.length - 1) {
      console.log("not enough brand to provide");
      return null;
    }
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
