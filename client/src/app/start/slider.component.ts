import { Component } from '@angular/core';

//Import image interface
import { Image } from './image.interface';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html'
    // styleUrls: ['./slider.component.css']
})
export class SliderComponent {
    // images data to be bound to the template
    public images = IMAGES;
}

// Images array implementing image interface
var IMAGES: Image[] = [
    {title: 'Flowers', description: 'these are some nice flowers', location: 'Sarajevo', date: '12 februari', url: 'https://www.almanac.com/sites/default/files/birth_month_flowers-primary-1920x1280px_pixabay.jpg' },
    {title: 'Cars', description: 'these are some nice cars', location: 'Sarajevo', date: '12 februari', url: 'https://avisassets.abgemea.com/.imaging/featureImageLarge/dms/DMS/local/ZA/fleet/fleet-page/luxury-cars-feature.jpg' },
    {title: 'towers', description: 'these are some nice towers', location: 'Sarajevo', date: '12 februari', url: 'http://weburbanist.com/wp-content/uploads/2016/08/diamond-tower.jpg' },
    {title: 'City', description: 'this is a nice city', location: 'Sarajevo', date: '12 februari', url: 'http://musiccitiessummit.com/wp-content/uploads/chicago-1.jpg' },
    {title: 'Ocean', description: 'Theres alot of water', location: 'Sarajevo', date: '12 februari', url: 'https://oceanconservancy.org/wp-content/themes/oco-wp/images/header-video.jpg' },
];
