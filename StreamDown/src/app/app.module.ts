import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SAVER, getSaver } from '../saver.provider';
 import {MatButtonModule} from "@angular/material/button";
 import {MatProgressBarModule} from '@angular/material/progress-bar';
 import {MatCardModule} from '@angular/material/card'; 
 import { BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule
   
  ],
  providers: [{provide: SAVER, useFactory: getSaver}],
  bootstrap: [AppComponent]
})
export class AppModule { }
