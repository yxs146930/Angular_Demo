import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scope1 = {
    name: 'Web Development',
    price: 300,
    active: true
  }
  scope2 = {
    name: 'Design',
    price: 400,
    active: false
  }
  scope3 = {
    name: 'Integration',
    price: 250,
    active: false
  }
  scope4 = {
    name: 'Training',
    price: 220,
    active: false
  }
  scopes = [this.scope1, this.scope2, this.scope3, this.scope4];

function total(s) {
  var total = 0;
  if (s.active) {
    total += s.price;
  }
  return total;
};

return total;

}
