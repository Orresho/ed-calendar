import { SlideService } from './slide.service';
import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';
declare var jQuery;


@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SlideComponent implements OnInit, OnChanges {
    slides: Slide[];
    @Input() speedes: string;

    constructor(private slideService: SlideService){
    }
    
    ngOnInit(){
        console.log("init - " + this.speedes)
        this.slideService.getSlides()
            .subscribe((slides: Slide[]) => {
                this.slides = [];
                for(var slide of slides)
                    if(slide['location'] == 'Växjö'){
                        //console.log(slide);
                        this.slides.push(slide)
                    }
        //console.log(slides);
        });
    }
   
    ngOnChanges() {
        console.log("change - " + this.speedes)
        jQuery('#myCarousel').carousel({
            dataInterval: this.speedes
        });
        
        jQuery('#myCarousel').carousel('cycle');
    }
              
    
        

}
