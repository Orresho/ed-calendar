import { NgForm } from '@angular/forms';
import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    constructor(public shareService: ShareService) {

    }
    @Output() onSpeedChange = new EventEmitter<number>();
    @Output() selectCity = new EventEmitter<String>();
    
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

    onSelectCity(value){
        this.selectCity.emit(value);
        this.shareService.setCity = value;
    }

    // use form property to access and emit interval value 
    onSubmit(form: NgForm){
        this.onSpeedChange.emit(form.value.interval);
    }
    citys = [
        {name: "Växjö"},
        {name: "Malmö"},
        {name: "Karlskrona"},
        {name: "Lund"},
        {name: "Helsingborg"}
    ];
    
}