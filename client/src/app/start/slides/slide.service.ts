import { Slide } from './slide.interface';
import { Injectable } from "@angular/core";


@Injectable()
export class SlideService{

    
    private slides: Slide[] = [];

    //fill the list with slides from the backend

    getSlides(){
        return this.slides;
    }
}