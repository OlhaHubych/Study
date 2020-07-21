import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import { AddFormComponent } from './components/gallery-page/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GalleryPageComponent,
    ContactsPageComponent,
    PageNotFound404Component,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
