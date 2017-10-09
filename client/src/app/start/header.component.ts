import { NgForm } from '@angular/forms';
import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    @Output() onSpeedChange = new EventEmitter<number>();
    @Input() time:number;
    @ViewChild('sidenav') sidenav: any;

    sideWidth:any = 0;
    openNav(event) {
        this.sideWidth = 350;
    }
    closeNav() {
        this.sideWidth = 0;
    }

    // intervall speed value changed on input.
    ngOnInit(){

    }

    // use form property to access and emit interval value 
    onSubmit(form: NgForm){
        console.log('Headercomponent: ' + form.value.interval);
        this.onSpeedChange.emit(form.value.interval);
        
    }
}