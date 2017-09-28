import { Component, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent{

    @Input() time:number;
    
    @ViewChild('sidenav') sidenav: any;

    sideWidth:any = 0;

    openNav(event) {
        this.sideWidth = 350;
    } 
    closeNav() {
        this.sideWidth = 0;        
    }

}