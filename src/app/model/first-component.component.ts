import { Component, type OnInit } from '@angular/core'
import { GENRE } from '../util/constants/Genre';

@Component({
    selector: 'first-component',
    templateUrl: './first-component.component.html'
})

export class FirstComponent implements OnInit{
    public name: string;
    public description: string;
    public price: number;
    public category: GENRE[];
    public isAvailable: boolean;
    
    constructor() {
        this.name = 'The Dark Knight';
        this.description = 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.';
        this.price = 10.00;
        this.category = [GENRE.ACTION, GENRE.CRIME, GENRE.DRAMA];
        this.isAvailable = true;

    }
    ngOnInit(): void {
        console.log('FirstComponent.ngOnInit called. No implementation yet.');
    }

}