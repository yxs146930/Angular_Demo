import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() store: Recipe;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
