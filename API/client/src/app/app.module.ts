import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added for HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
