import { Slide } from './../slide.model';
import { SlideService } from './../slide.service';
import { Component, OnInit } from '@angular/core';
import { SlideComponent } from '../slide.component';

@Component({
    selector: 'app-event-summary',
    templateUrl: './event-summary.component.html',
    styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit {
    constructor(private slideService: SlideService){}

    slides: Slide[];

    ngOnInit(){
        this.slideService.getSlides()
          .subscribe((slides: Slide[]) => {
              return this.slides = slides;
          })
          
    }

}
