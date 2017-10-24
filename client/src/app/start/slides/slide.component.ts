import { SlideService } from './slide.service';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';
declare var $;

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SlideComponent implements OnInit, OnChanges {
    slides: Slide[];
    @Input() speed: string;
    @Input() city: string;
    
    constructor(private slideService: SlideService) { }
    
    ngOnInit() {
        localStorage.getItem("speed");
        // Exec getSeminars
        this.getSeminars();

        // Exec getCourses
        this.getCourses();
    }
    
    ngOnChanges() {
        localStorage.setItem("city",this.city);
        // Refresh on change
        this.getSeminars();
        this.getCourses();
        console.log('Slider - Selected city: ' + this.city);
        localStorage.setItem("speed",this.speed);
        this.refreshCarousel();
        // console.log(this.speedes);
       
    }
    
    
    // Get Seminars
    getSeminars() {
       // console.log(this.selectedValue)
        //console.log("init - " + this.speedes)
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
                    if (slide['location'] == city) {
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
                var city = localStorage.getItem("city");
                if(city =='null')
                    city = 'Växjö'
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['courseInformation'].includes(city)) {
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
        var snabb = localStorage.getItem("speed");
        console.log(snabb);
        if (snabb == 'null'){
            snabb = '60000';
        }
        console.log('Changed interval: ' + this.speed);
        console.log(typeof snabb)
        $('.carousel').carousel({
            
            interval: snabb
        })
        $('.carousel').carousel('cycle');
        
    }

}
