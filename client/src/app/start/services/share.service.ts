import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ShareService {
    @Input() city: string = 'default value';

    constructor() {

    }
    
    setCity(value) {
        this.city = value;
    }

    getCity(){
        return this.city;
    }

    private citySource = new BehaviorSubject<string>(this.city);
    currentCity = this.citySource.asObservable();
}