import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytableComponent } from './mytable/mytable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HostComponent } from './mytable/host.component';

@NgModule({
  declarations: [
    AppComponent,
    MytableComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
