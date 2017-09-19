import { Component, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{

    @Input() time:number;
    
    @ViewChild('sidenav') sidenav: any;

    sideWidth:any = 0;

    openNav(event) {
        this.sideWidth = 250;
    } 
    closeNav() {
        this.sideWidth = 0;        
    }

}