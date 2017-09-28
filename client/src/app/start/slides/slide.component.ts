import { SlideService } from './slide.service';
import { Component, OnInit } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SlideComponent implements OnInit {
    slides: Slide[];
    
    constructor(private slideService: SlideService){}

    ngOnInit(){
        this.slideService.getSlides()
            .subscribe((slides: Slide[]) => {
                this.slides = slides;
                // console.log(slides);
            });
    }
}