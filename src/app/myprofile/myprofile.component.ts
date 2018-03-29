import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  name : String = "zhouzhou";
  name2 : String ="***********";
  mystyle : String = "demo-profile-name-blue";
  isDisabled : Boolean  = false;
  
  myExample3Name = "not set yet";
  
  constructor() { 
    setTimeout(() => {
      this.mystyle = "demo-profile-name-red";
    }, 3000);
  
  }
  
  ngOnInit() {

  }

  updateText(event: Event) {
      this.myExample3Name = (<HTMLInputElement>event.target).value;
  }

}
