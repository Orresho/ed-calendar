import { Component, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent{
    
    @ViewChild('sidenav') sidenav: any;

        //exapanded:boolean;
    sideWidth:any = 0;

    openNav(event) {
       // console.log(event);
        //this.sidenav.nativeElement.style.width = "250px";
        this.sideWidth = 250;
    } 
    closeNav() {
        //this.sidenav.nativeElement.style.width = "0";
        this.sideWidth = 0;        
    }

}