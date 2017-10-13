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
    constructor(private slideService: SlideService) { }

    slides: Slide[];

    ngOnInit() {
        this.slideService.getSeminars()
            .subscribe((slides: Slide[]) => {
                this.slides = [];
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] == 'Växjö') {
                        if (newDate > today) {
                            // console.log(newDate);
                            this.slides.push(slide);


                        }
                    }
                    
                    this.slides.sort((obj1, obj2) => {
                        if (obj1['numericDate'] > obj2['numericDate']) {
                            return 1;
                        }

                        if (obj1['numericDate'] < obj2['numericDate']) {
                            return -1;
                        }

                        return 0;
                    });
                }
            });
    }

}
