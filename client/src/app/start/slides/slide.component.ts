import { SlideService } from './slide.service';
import { Component, OnInit } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SliderComponent implements OnInit {
    slides: Slide[];
    
    constructor(private slideService: SlideService){}

    ngOnInit(){
        this.slideService.getSlides()
            .subscribe((slides: Slide[]) => {
                this.slides = slides;
            });
    }
    
    // images data to be bound to the template
    // public slides2 = SLIDES;
}

// Images array implementing image interface
// var SLIDES: Slide[] = [
//     {
//         title: 'Leadership'
//         , imageUrl: 'http://softhouseeducation.se/wp-content/uploads/2015/08/seminarium-eventbilder-9.png'
//         , subHeading: 'Did I just lose my job? – the line managers role in an agile organization'
//         , description: `What does a line manager do in an agile organization? How can you help an organization that consists of cross-functional teams that are supposed to be able to handle everything themselves? What is left to do when teams prioritize, plan and execute everything themselves? There is no best practice for what a line manager should do. During this presentation we will talk about how leaders can best help their organization thrive, and what the impact is when they become too entangled in day-to-day operations and start micro-managing.`
//         , price: 'Gratis event'
//         , language: 'Engelska'
//         , date: '10 okt 2017'
//         , time: '08:30 – 10:00'
//         , location: 'Dockplatsen 12, Malmö'
//         , speakerImageUrl: 'http://education.hemsida.eu/wp-content/uploads/2015/11/Marcus-Degerman.jpg'
//         , speakerFullName: 'MARCUS DEGERMAN'
//         , speakerDescription: 'Marcus Degerman is a senior consultant at Softhouse Consulting where he helps organizations make it simpler to improve their collaboration and capabilities. He is the author of Solve Problems Together and an appreciated speaker, trainer, and consultant.'
//         , speakerEmail: 'marcus.degerman@softhouse.se'
//         , speakerPhone: '+46(0)701 112 055'
//     },
//     {
//         title: 'Brädspelskväll: Continuous Delivery - The Game'
//         , imageUrl: 'http://softhouseeducation.se/wp-content/uploads/2017/09/Copy-kurs2Fsem-15.png'
//         , subHeading: 'Temat för kvällen är att kombinera 2 intressen, spela brädspel & continuous delivery. Vi är många på Softhouse som gillar just detta och vill gärna träffa fler som delar vårt intresse.'
//         , description: `I spelet “Continuous delivery – The Game” samarbetar vi 3-5 spelare
//         med ansvar för olika avdelningar med målet att Leverera och Maximera inkomst
//         samtidigt som vi förändrar en traditionell utvecklingsavdelning till en continuous
//         delivery pipeline. Genom spelet hoppas vi trigga intressanta diskussioner kring
//         ämnet!`
//         , price: 'Gratis event'
//         , language: 'Svenska'
//         , date: '11 okt 2017'
//         , time: '17:00-19:00 (Enklare mat och dryck från 17:00, Introduktion av spelet startar 17:15, sedan tar spelet ca 1,5 h)'
//         , location: 'Kungsgatan 1B, 352 30 Växjö'
//         , speakerImageUrl: 'http://softhouseeducation.se/wp-content/uploads/2017/01/mattias%C3%A5hlander.jpg'
//         , speakerFullName: 'MATTIAS ÅHLANDER'
//         , speakerDescription: 'Mattias är agil coach och utbildare hos Softhouse med erfarenhet av förändringsledning, verksamhetsutveckling och införande av agila arbetssätt. Rutinerad och engagerad ledare som har erfarenhet i många roller, tex chef, projektledare, scrum master, produktägare och utvecklare. Coachar och leder utvecklingsteam, scrum masters, produktägare och chefer i sin roll som agil coach.'
//         , speakerEmail: 'mattias.ahlander@softhouse.se'
//         , speakerPhone: '070 3090149'
//     },
//     {
//         title: 'Solve problems together'
//         , imageUrl: 'http://softhouseeducation.se/wp-content/uploads/2017/02/Kurs2Fsem-2.png'
//         , subHeading: ''
//         , description: `Det är först när vi börjar lösa problem tillsammans som vi kan göra något åt de komplexa utmaningar vi står inför i våra organisationer. Det innebär dock att vi måste samla en grupp människor till ett möte, vilket många ser som motsatsen till att arbeta. Det finns enkla sätt att skapa bättre möten, möten där ni går på djupet för att hantera utmaningar, hittar kreativa lösningar och en tydlig väg framåt.`
//         , price: 'Gratis event'
//         , language: 'Svenska'
//         , date: '17 okt 2017'
//         , time: '17:00 -19:00'
//         , location: 'Kungsgatan 1B, Växjö'
//         , speakerImageUrl: 'http://education.hemsida.eu/wp-content/uploads/2015/11/Marcus-Degerman.jpg'
//         , speakerFullName: 'MARCUS DEGERMAN'
//         , speakerDescription: 'Marcus Degerman is a senior consultant at Softhouse Consulting where he helps organizations make it simpler to improve their collaboration and capabilities. He is the author of Solve Problems Together and an appreciated speaker, trainer, and consultant.'
//         , speakerEmail: 'marcus.degerman@softhouse.se'
//         , speakerPhone: '+46(0)701 112 055'
//     },
//     {
//         title: 'Kanban'
//         , imageUrl: 'http://softhouseeducation.se/wp-content/uploads/2017/07/seminarium-eventbilder-4.png'
//         , subHeading: 'Temat för kvällen är att kombinera 2 intressen, spela brädspel & continuous delivery. Vi är många på Softhouse som gillar just detta och vill gärna träffa fler som delar vårt intresse.'
//         , description: `Leder du team eller projekt och är trött på att du inte har koll på vad som händer? Eller känner du att du är den enda som tar ansvar och vill slippa detaljstyra allt. Går det för lång tid mellan idé och kunden får ta del av det? Då kanske Kanban kan hjälpa dig, och ett enkelt sätt att utforska Kanban vidare är att besöka vårt frukostseminarie!`
//         , price: 'Gratis event'
//         , language: 'Svenska'
//         , date: 'Växjö 24 okt 2017 |08:00 (Frukost) 08:30-10:00 (Föredrag)'
//         , time: ''
//         , location: 'Softhouse Consulting, Kungsgatan 1B, Växjö'
//         , speakerImageUrl: 'http://softhouseeducation.se/wp-content/uploads/2017/01/mattias%C3%A5hlander.jpg'
//         , speakerFullName: 'MATTIAS ÅHLANDER'
//         , speakerDescription: 'Mattias är agil coach och utbildare hos Softhouse med erfarenhet av förändringsledning, verksamhetsutveckling och införande av agila arbetssätt. Rutinerad och engagerad ledare som har erfarenhet i många roller, tex chef, projektledare, scrum master, produktägare och utvecklare. Coachar och leder utvecklingsteam, scrum masters, produktägare och chefer i sin roll som agil coach.'
//         , speakerEmail: 'mattias.ahlander@softhouse.se'
//         , speakerPhone: '070 3090149'
//     },
// ];
