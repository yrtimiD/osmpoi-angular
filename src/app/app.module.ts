import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { PoiModule } from '@osmpoi/poi';
import { OverpassApiModule } from '@osmpoi/overpass-api';
import { MapViewComponent } from './map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryViewComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoiModule,
    OverpassApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
