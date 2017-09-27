import { Slide } from './slide.interface';
import { Injectable } from "@angular/core";


@Injectable()
export class SlideService{
    private slides: Slide[] = [];

    getSlides(){
        return this.slides;
    }


    
}