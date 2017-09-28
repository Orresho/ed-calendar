import { SlideService } from './start/slides/slide.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SlideService]
})
export class AppComponent {
}
