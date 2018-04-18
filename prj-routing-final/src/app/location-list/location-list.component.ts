import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Http, Response } from '@angular/http';
import { Brand } from './brand.model';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  providers: [DataStorageService]
})
export class LocationListComponent implements OnInit {
  constructor(private http: Http,  private dataStorageService: DataStorageService) { }
  brand: Brand = null;
  brandName = "aa";
  price = "1000";
  brands: Brand[];
  ngOnInit() {

  }

  saveNewBrand() {
    this.brand = {
      brandName: this.brandName,
      price: this.price
    }
    this.http.post('https://fir-3cc8a.firebaseio.com/Brand.json', this.brand).map( (response: Response) => {}).subscribe();
    return;
  }


  getAllBrands() {
    this.http.get('https://fir-3cc8a.firebaseio.com/Brand.json').map( (response: Response) => {
      console.log(response.json());
      this.brands = response.json();
      for (let brand  of this.brands) {
        console.log(brand);
      }
    }).subscribe();
    return;
  }
}
