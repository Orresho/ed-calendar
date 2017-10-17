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

    constructor(private slideService: SlideService) { }

    ngOnInit() {

        // Exec getSeminars
        this.getSeminars();

        // Exec getCourses
        this.getCourses();
    }

    // Get Seminars
    getSeminars() {
        // console.log("init - " + this.speedes)
        this.slideService.getSeminars()
            .subscribe((slides: Slide[]) => {
                this.slides = [];
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] == 'Växjö') {
                        if (newDate > today) {
                            console.log(this.slides);
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
                    if (slide['courseInformation'].includes('Växjö')) {
                        
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

    ngOnChanges() {
        //console.log("change - " + this.speedes)
        jQuery('#myCarousel').carousel({
            interval: this.speedes
        });

        jQuery('#myCarousel').carousel('cycle');

        // console.log(this.speedes);
    }
}
