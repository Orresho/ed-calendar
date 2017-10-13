import { Component } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.components.css']
})

export class StartComponent {

    value:number = 12;
    speed = 30000000; // default value

    changeValue():void {
        this.value += 1;
    }

    // We recieve the speed interval value from onSpeedChange and pass it to global speed which is then bound to the global slide property "speedes" in the slide.component.ts file.
    speedChangeValue(speed: number):void {
        console.log("changes in parent: "+ speed)
        this.speed = speed;
    }
}