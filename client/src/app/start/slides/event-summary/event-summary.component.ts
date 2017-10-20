import { Slide } from './../slide.model';
import { SlideService } from './../slide.service';
import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { SlideComponent } from '../slide.component';
import { ShareService } from '../../services/share.service';

@Component({
    selector: 'app-event-summary',
    templateUrl: './event-summary.component.html',
    styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit, OnChanges {
    constructor(private slideService: SlideService,
        public shareService: ShareService) {}

    @Input() selectedValue: string;

    slides: Slide[];
    courses: Slide[];

    ngOnChanges(){
        // this.shareService.currentCity.subscribe(city => this.selectedValue = city);
        console.log('Event summary - Selected city: ' + this.selectedValue);
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
                this.slides = [];
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] == this.selectedValue) {

                        if (newDate > today) {
                            if (this.slides.length < 4) {
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
                this.courses = [];
                for (var course of courses) {
                    console.log(this.selectedValue)
                    let dateString = course['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (course['courseInformation'].includes(this.selectedValue)) {
                        if (this.courses.length < 4) {
                            this.courses.push(course);
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
