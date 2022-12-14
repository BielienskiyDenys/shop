import { Component, Input } from '@angular/core';
import { Genre } from 'src/app/model/genre';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public category: Genre[];
  public isAvailable: boolean;
  
  constructor() {
      this.id = 3;
      this.name = 'The Dark Knight';
      this.description = 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.';
      this.price = 10.00;
      this.category = [Genre.ACTION, Genre.CRIME, Genre.DRAMA];
      this.isAvailable = true;
  }
}

