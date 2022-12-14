import { Component } from '@angular/core';
import { Product } from './model/interface/product';
import { generateProductDtos } from './util/product-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  public products: Product[] = generateProductDtos();
}
