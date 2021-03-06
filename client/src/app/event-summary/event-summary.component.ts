import { Slide } from '../_models/slide.model';
import { SlideService } from '../_services/slide.service';
import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { SlideComponent } from '../slides/slide.component';

@Component({
    selector: 'app-event-summary',
    templateUrl: './event-summary.component.html',
    styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit, OnChanges {
    constructor(
        private slideService: SlideService) {}

    @Input() city: string;

    slides: Slide[];
    courses: Slide[];

    ngOnChanges(){
        // this.shareService.currentCity.subscribe(city => this.selectedValue = city);
        localStorage.setItem("city",this.city);

        this.getSeminars();
        this.getCourses();
    }

    ngOnInit() {
        // Run getSeminars
        this.getSeminars();

        // Run getCourses
        this.getCourses();
    }


    // Fetch seminars only and transform the data to the slides array
    getSeminars() {
        this.slideService.getSeminars()
            .subscribe((slides: Slide[]) => {
                var city = localStorage.getItem("city");
                if(city =='null')
                    city = 'Växjö'
                this.slides = [];                
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] ==  city) {
                        if (newDate > today) {
                            if (this.slides.length < 6) {
                                this.slides.push(slide);
                            }
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

    // Fetch courses only and transform the data to the courses array
    getCourses() {
        this.slideService.getCourses()
            .subscribe((courses: Slide[]) => {
                var city = localStorage.getItem("city");
                if(city =='null')
                    city = 'Växjö'
                this.courses = [];
                for (var course of courses) {
                    console.log(this.city)
                    let dateString = course['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (course['courseInformation'].includes(city)) {
                        if (newDate > today) {
                            if (this.courses.length < 6) {
                                this.courses.push(course);
                            }
                        }
                    }

                    // Sort by date
                    this.courses.sort((obj1, obj2) => {
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