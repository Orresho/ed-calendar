import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.components.css']
})

export class StartComponent {

    value:number = 12;
    time = localStorage.getItem("speed"); // default value
    city = localStorage.getItem("city");

    // default value
    changeValue():void {
        this.value += 1;
    }

    // We recieve the speed interval value from onSpeedChange and pass it to global speed which is then bound to the global slide property "speedes" in the slide.component.ts file.
    changedTime(time):void {
        console.log("changes in parent: "+ time)
        this.time= time;
    }

    changedCity(city: string){
        // console.log('changes in parent: ' + city)
        this.city = city;
    }
    
}