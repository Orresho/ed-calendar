import { Slide } from './slide.model';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SlideService{

    constructor(private http: Http){}
    
    // Main slides array
    private slides: Slide[] = [];


    getSlides(){
        return this.http.get('http://localhost:3000/event')
            .map((response: Response) => {
                const slides = response.json().obj;
                let transformedSlides: Slide[] = [];
                for (let slide of slides) {
                    transformedSlides.push(new Slide(
                        slide.title,
                        slide.imageUrl,
                        slide.subHeading,
                        slide.description,
                        slide.price,
                        slide.language,
                        slide.date,
                        slide.time,
                        slide.location,
                        slide.speakerImageUrl,
                        slide.speakerFullName,
                        slide.speakerDescription,
                        slide.speakerEmail,
                        slide.speakerPhone)
                    );
                }
                this.slides = transformedSlides;
                return transformedSlides;
            })
            .catch((error:Response) => Observable.throw(error.json()));
    }
}