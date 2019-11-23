import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PoiService } from './poi.service';


@NgModule({
  providers: [PoiService],
  declarations: [],
  imports: [HttpClientModule],
  exports: []
})
export class PoiModule { }
