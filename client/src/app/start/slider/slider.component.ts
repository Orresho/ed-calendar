import { Component } from '@angular/core';

//Import image interface
import { Image } from '../image.interface';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['slider.component.css']
})
export class SliderComponent {
    // images data to be bound to the template
    public images = IMAGES;
}

// Images array implementing image interface
var IMAGES: Image[] = [
    {title: 'Brädspelskväll: Continuous Delivery - The Game', description: `I spelet “Continuous delivery – The Game” samarbetar vi 3-5 spelare
    med ansvar för olika avdelningar med målet att Leverera och Maximera inkomst
    samtidigt som vi förändrar en traditionell utvecklingsavdelning till en continuous
    delivery pipeline. Genom spelet hoppas vi trigga intressanta diskussioner kring
    ämnet!`, location: 'Kungsgatan 1B, 352 30 Växjö', date: '11 okt 2017', url: 'http://softhouseeducation.se/wp-content/uploads/2017/09/Copy-kurs2Fsem-15.png' },
    
    
    {title: `Leadership`, description: `What does a line manager do in an agile organization? How can you help an organization that consists of cross-functional teams that are supposed to be able to handle everything themselves? What is left to do when teams prioritize, plan and execute everything themselves? There is no best practice for what a line manager should do, but there are a lot of things you should not be doing. During this presentation, we will talk about how leaders can best help their organization thrive, and what the impact is when they become too entangled in day-to-day operations and start micromanaging.`, location: 'Dockplatsen 12, Malmö', date: '10 okt 2017', url: 'http://softhouseeducation.se/wp-content/uploads/2015/08/seminarium-eventbilder-9.png' },
    
    {title: 'Solve Problems together', description: `Det är först när vi börjar lösa problem tillsammans som vi kan göra något åt de komplexa utmaningar vi står inför i våra organisationer. Det innebär dock att vi måste samla en grupp människor till ett möte, vilket många ser som motsatsen till att arbeta. Det finns enkla sätt att skapa bättre möten, möten där ni går på djupet för att hantera utmaningar, hittar kreativa lösningar och en tydlig väg framåt.
    Detta seminarium ger er en mängd tips och idéer samt chansen att på plats planera ett problemlösningsmöte som ni står inför.`, location: 'Kungsgatan 1B, Växjö', date: '17 okt 2017', url: 'http://softhouseeducation.se/wp-content/uploads/2017/02/Kurs2Fsem-2.png' },
    
    {title: 'Kanban', description: 'Leder du team eller projekt och är trött på att du inte har koll på vad som händer? Eller känner du att du är den enda som tar ansvar och vill slippa detaljstyra allt. Går det för lång tid mellan idé och kunden får ta del av det? Då kanske Kanban kan hjälpa dig, och ett enkelt sätt att utforska Kanban vidare är att besöka vårt frukostseminarie!', location: 'Softhouse Consulting, Kungsgatan 1B, Växjö', date: '24 okt 2017 |08:00 (Frukost) 08:30-10:00 (Föredrag)', url: 'http://softhouseeducation.se/wp-content/uploads/2017/07/seminarium-eventbilder-4.png' },
    
    {title: 'Innovation', description: `Så där står du, i ett företag som vill och måste innovera, men det bara inte händer!
    Ofta blir innovation bara prat med stora koncept – Center of Innovation, Studios, Hubbar – och då är det lätt hänt att man inte kommer ur startblocken. Följ med på en resa hur vi skapade innovation från gräsrötterna upp avdelningsnivå med innnovationsportfölj.`, location: 'Dockplatsen 12, Malmö', date: '26 okt 2017', url: 'http://softhouseeducation.se/wp-content/uploads/2017/09/seminarium-eventbilder-16.png' },
];
