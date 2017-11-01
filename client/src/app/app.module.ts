import { SlideService } from './_services/slide.service';
import { SlideComponent } from './slides/slide.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EventSummaryComponent } from './event-summary/event-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeminarsComponent } from './slides/seminars/seminars.component';
import { CoursesComponent } from './slides/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    SlideComponent,
    EventSummaryComponent,
    SeminarsComponent,
    CoursesComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [SlideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
