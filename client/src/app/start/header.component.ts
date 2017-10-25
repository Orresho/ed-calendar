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
    @Output() selectTime = new EventEmitter<string>();
    @Output() selectCity = new EventEmitter<String>();
    
    @Input() time:number;
    @ViewChild('sidenav') sidenav: any;

    sideWidth:any = 0;
    openNav(event) {
        this.sideWidth = 270;
    }
    closeNav() {
        this.sideWidth = 0;
    }

    // intervall speed value changed on input.
    ngOnInit(){

    }
    onSelectTime(value){
        this.selectTime.emit(value);
        this.shareService.setTime = value;
        window.location.reload();
    }
    onSelectCity(value){
        this.selectCity.emit(value);
        this.shareService.setCity = value;
        window.location.reload();
    }

    // use form property to access and emit interval value 
    /*onSubmit(form: NgForm){
        this.onSpeedChange.emit(form.value.interval);
    }*/
    citys = [
        {name: "Växjö"},
        {name: "Malmö"},
        {name: "Karlskrona"},
        {name: "Lund"},
        {name: "Helsingborg"}
    ]
    timer = [
        { time:"6 sek", period:6000},
        { time:"0.5 min", period:30000},
        {time:"1.0 min", period:60000 },
        {time:"1.5 min", period: 90000},
        {time:"2.0 min",period: 120000},
        {time:"2.5 min", period: 150000}
        
    ]
    
}