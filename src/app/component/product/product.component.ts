import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {} as Product;

  constructor (private cartService: CartService) {

  }

  public onAddToCart(): void {
    console.log(`Purchase button clicked! Product should be added to cart.`)
    this.cartService.addProductToCart(this.product);
  }
}
