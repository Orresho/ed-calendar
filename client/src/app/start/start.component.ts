import { Component } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.components.css']
})

export class StartComponent {

    value:number = 12;
    speed = 3000; // default value

    changeValue():void {
        this.value += 1;
    }

    speedChangeValue(speed: number):void {
        console.log("changes in parent: "+ speed)
        this.speed = speed;
    }
}