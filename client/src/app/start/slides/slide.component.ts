import { SlideService } from './slide.service';
import { Component, OnInit, Input } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SlideComponent implements OnInit {
    slides: Slide[];
    @Input() speedes: string;


    // https://www.google.ba/search?q=property+bind+custom+attributes&rlz=1C1TIGY_enSE758SE758&oq=property+bind+custom+attributes&aqs=chrome..69i57.5675j0j4&sourceid=chrome&ie=UTF-8
    constructor(private slideService: SlideService){
    }
    
    ngOnInit(){
        this.slideService.getSlides()
            .subscribe((slides: Slide[]) => {
                return this.slides = slides;
                // console.log(slides);
            });
    }

    
    
}
