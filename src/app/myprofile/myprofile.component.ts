import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  name : String = "zhouzhou";
  name2 : String ="";
  password: String ="";
  repassword: String ="";
  mystyle : String = "demo-profile-name-black";
  isDisabled : Boolean  = false;
  
  myExample3Name = "not set yet";
  
  constructor() { 
    setTimeout(() => {
      this.mystyle = "demo-profile-name-black";
    });
  
  }
  
  ngOnInit() {

  }

  updateText(event: Event) {
      this.myExample3Name = (<HTMLInputElement>event.target).value;
  }

}
