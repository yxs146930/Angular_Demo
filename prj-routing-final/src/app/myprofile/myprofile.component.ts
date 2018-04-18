import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  name: 'zhouzhou';
  ssn: '5431233232';
  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log("going to save data");
  }
}
