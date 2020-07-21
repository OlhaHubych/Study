import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytableComponent } from './mytable/mytable.component';
import { HostComponent } from './mytable/host.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddElementComponent } from './add-element/add-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MytableComponent,
    HostComponent,
    AddElementComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
