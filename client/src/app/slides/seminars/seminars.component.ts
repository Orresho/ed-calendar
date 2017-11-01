import { SlideService } from '../../_services/slide.service';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';


//Import image interface
import { Slide } from '../../_models/slide.model';
declare var $;
@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['../../slides/slide.component.css']
})
export class SeminarsComponent implements OnInit,OnChanges {
  @Input() slide;

   constructor() { }

   ngOnInit() {
  
   }
   ngOnChanges(){
    
   }

}