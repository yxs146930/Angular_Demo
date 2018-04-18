import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Brand } from '../location-list/brand.model';
@Injectable()
export class DataStorageService {
  constructor(private http: Http) {}

 

  saveBrand(brand: Brand) {
    console.log(brand);
    this.http.put('https://ng-recipe-book.firebaseio.com/Recipes.json', brand);
    
  }

  // getRecipes(): Recipe[] {
  //   this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
  //     .map(
  //       (response: Response) => {
  //         const recipes: Recipe[] = response.json();
  //         for (let recipe of recipes) {
  //           if (!recipe['ingredients']) {
  //             recipe['ingredients'] = [];
  //           }
  //         }
  //         return recipes;
  //       }
  //     )
  //     .subscribe(
  //       (recipes: Recipe[]) => {
  //         // this.recipeService.setRecipes(recipes);
  //         console.log(recipes);
  //         return recipes;
  //       }
  //     );
  //     return null;
  // }
}
