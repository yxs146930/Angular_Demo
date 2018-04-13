import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UniversityComponent } from './university/university.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DemoComponent } from './demo/demo.component';
import { ServicedemoComponent } from './servicedemo/servicedemo.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UniversityComponent,
    MyprofileComponent,
    DemoComponent,
    ServicedemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
