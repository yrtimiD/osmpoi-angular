import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { PoiModule } from '@osmpoi/poi';
import { OverpassApiModule } from '@osmpoi/overpass-api';
import { MapViewComponent } from './map-view/map-view.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    CategoryViewComponent,
    MapViewComponent
  ],
  imports: [
    LoggerModule.forRoot({level: NgxLoggerLevel.TRACE}),
    BrowserModule,
    AppRoutingModule,
    PoiModule,
    OverpassApiModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
