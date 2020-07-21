import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'gallery', component: GalleryPageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: '**', component: PageNotFound404Component} //самая последняя запись ** - это любая запись
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
