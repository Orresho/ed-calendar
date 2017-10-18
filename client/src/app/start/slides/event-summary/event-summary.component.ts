import { Slide } from './../slide.model';
import { SlideService } from './../slide.service';
import { Component, OnInit, Input } from '@angular/core';
import { SlideComponent } from '../slide.component';
import { ShareService } from '../../services/share.service';

@Component({
    selector: 'app-event-summary',
    templateUrl: './event-summary.component.html',
    styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent implements OnInit {
    constructor(private slideService: SlideService,
                public shareService: ShareService ) {
                    console.log("SHARE ", this.shareService.getCity());
                 }

    @Input() selectedValue: string;


    slides: Slide[];
    courses: Slide[];

   

    ngOnInit() {

        // Run getSeminars
        this.getSeminars();

        // Run getCourses
        this.getCourses();

    }

    callSelectCity(data){
        console.log("hejsan  ", data )
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
                            if (this.slides.length < 4){
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
                    if (course['courseInformation'].includes('Växjö')) {
                        if (this.courses.length < 4){
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
