import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular2-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, AdminModule, UserModule, AppRoutingModule, RouterModule, HttpModule, ChartModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
