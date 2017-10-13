// import { Course } from './course.model';
import { Slide } from './slide.model';

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SlideService {
    constructor(private http: Http) { }

    // Main arrays
    private slides: Slide[] = [];
    // private courses: Course[] = [];

    getSeminars() {
        return this.http.get('http://localhost:3000/event')
            .map((response: Response) => {
                return this.slides = response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getCourses(){
        return this.http.get('http://localhost:3000/course')
            .map((response: Response) => {
                console.log(response);
                return this.slides = response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}