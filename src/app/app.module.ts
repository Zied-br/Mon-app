import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule,registerLocaleData} from '@angular/common';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import localeFr  from '@angular/common/locales/fr';
import { StartRatComponent } from './rating/start-rating-component';

registerLocaleData(localeFr,'fr');
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    StartRatComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
