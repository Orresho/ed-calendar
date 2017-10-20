import { SlideService } from './slide.service';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

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
    @Input() speed: string;
    @Input() selectedValue: string;
    
    constructor(private slideService: SlideService) { }
    
    ngOnInit() {
        
        // Exec getSeminars
        this.getSeminars();

        // Exec getCourses
        this.getCourses();
    }
    
    ngOnChanges() {
        
        // Refresh on change
        this.getSeminars();
        this.getCourses();

        this.refreshCarousel();
        // console.log(this.speedes);
    }
    
    
    // Get Seminars
    getSeminars() {
       // console.log(this.selectedValue)
        //console.log("init - " + this.speedes)
        this.slideService.getSeminars()
            .subscribe((slides: Slide[]) => {
                this.slides = [];
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] == this.selectedValue) {
                        if (newDate > today) {
                            // console.log(this.slides);
                                this.slides.push(slide);
                        }
                    }

                    // Sort by date
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

    // Get Courses
    getCourses() {
        this.slideService.getCourses()
            .subscribe((slides: Slide[]) => {
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['courseInformation'].includes(this.selectedValue)) {
                        this.slides.push(slide);
                    }
                    

                    // Sort by date
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


    refreshCarousel(){
        console.log('Changed interval: ' + this.speed);
        jQuery('.carousel').carousel({
            interval: this.speed
        });
        jQuery('carousel').carousel('cycle');
    }

}
