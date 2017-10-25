import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ShareService {
    @Input() city: string = 'default value';
    @Input() time: string = 'default value';

    constructor() {

    }
    setTime(value) {
        this.time = value;
    }
    setCity(value) {
        this.city = value;
    }

    getCity(){
        return this.city;
    }
    getTime(){
        return this.time;
    }
    private timeSource = new BehaviorSubject<string>(this.time);
    currentTime = this.timeSource.asObservable();
    private citySource = new BehaviorSubject<string>(this.city);
    currentCity = this.citySource.asObservable();
}