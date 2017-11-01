import { SlideService } from '../../_services/slide.service';
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

//Import image interface
import { Slide } from '../../_models/slide.model';
declare var $;

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../../slides/slide.component.css']
})
export class CoursesComponent implements OnInit,OnChanges {
  
  @Input() slide;
 
  constructor() { }

  ngOnInit() {
 
  }
  ngOnChanges(){
   
  }






}
