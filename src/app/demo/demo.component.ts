import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  a = "3";

  university1 = {
    name: "NYU",
    zipCode: 11101,
    state:"NewYork"
  }

  university2 = {
    name: "SMU",
    zipCode: 74254,
    state:"CA"
  }

  universities = [this.university1, this.university2];

  Hero = {
    id: '00011',
   name: "Zhou"
  }
  
  login = false;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  isValid(): boolean {
    return 1 + 1 == 2;
  }

  inValid = true;
  myVar = true;
}
