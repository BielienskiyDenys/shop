import { Injectable } from '@angular/core';
import { Product } from '../model/interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartContent: Product[] = [];
  private CART_LOCAL_STORAGE_KEY = 'CartLocalStorageKey';


  constructor() {
    this.clearCart();
  }

  public addProductToCart(product: Product) {
    const cart = this.getCartContent();
    cart.push(product);
    localStorage.setItem(this.CART_LOCAL_STORAGE_KEY, JSON.stringify(cart))

    this.cartContent.push(product);
  }

  public removeProductFromCart(product: Product) {
    let cart = this.getCartContent();
    cart = cart.filter(item => item.id !== product.id);
    localStorage.setItem(this.CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));

    this.cartContent = this.cartContent.filter(item => item.id !== product.id);
  }

  public clearCart() {
    localStorage.setItem(this.CART_LOCAL_STORAGE_KEY, JSON.stringify([]));
    
    this.cartContent = [];
  }

  public getCartContent() {
    return JSON.parse(localStorage.getItem(this.CART_LOCAL_STORAGE_KEY)||JSON.stringify([])) as Product[];
  }
}
