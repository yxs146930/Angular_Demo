import { Component, OnInit } from '@angular/core';
import { FirstService } from './first-service.service';
@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css'],
  providers: [FirstService]
})
export class ServicedemoComponent implements OnInit {

  constructor(private fs: FirstService) { }

  ngOnInit() {

  }


  a = 5;
  b = 6;
  // fs: FirstService = new FirstService();

  c = this.fs.add(this.a, this.b);
  mydata = this.fs.datas;

  zhouzhouGender = this.fs.getDisplayGender('F');
}
