import { Component } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.components.css']
})

export class StartComponent {

    value:number = 12;

    changeValue():void {
        this.value += 1;
    }
}