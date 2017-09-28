import { SliderComponent } from './start/slider/slider.component';
import { HeaderComponent } from './start/header.component';
import { StartComponent } from './start/start.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventSummaryComponent } from './start/slider/event-summary/event-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    SliderComponent,
    EventSummaryComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
