import { NgForm } from '@angular/forms';
import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    // intervalForm: FormGroup;
    // @Input() speed;
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

    onSubmit(form: NgForm){
        console.log('Headercomponent: ' + form.value.interval);
        this.onSpeedChange.emit(form.value.interval);
        
    }

    // onSubmit(){
    //     console.log("change inside childe")
    //     // // console.log(this.intervallForm.value);
    //     // this.speed = this.intervalForm.value;
    //     console.log(this.intervalForm.value);
    //     this.onSpeedChange.emit(2222);
    // }

}