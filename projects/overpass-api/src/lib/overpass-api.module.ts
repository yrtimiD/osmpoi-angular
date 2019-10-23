import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OverpassApiService } from './overpass-api.service';
import { OverpassUrlService } from './overpass-url.service';


@NgModule({
  providers: [OverpassApiService, OverpassUrlService],
  declarations: [],
  imports: [HttpClientModule],
  exports: []
})
export class OverpassApiModule { }
