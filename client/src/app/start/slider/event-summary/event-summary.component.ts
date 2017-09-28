import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider.component';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.component.html',
  styleUrls: ['./event-summary.component.css']
})
export class EventSummaryComponent{
    temp:  SliderComponent = new SliderComponent();

}
