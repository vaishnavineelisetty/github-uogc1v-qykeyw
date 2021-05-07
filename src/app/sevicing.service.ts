import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class SevicingService {
  constructor() {}
  public foodItems: Menu[] = [
    { name: 'Chana Bhatura', price: '12.5' },
    { name: 'Paneer Tikka', price: '12.5' },
    { name: 'Dal Makhani', price: '14' },
    { name: 'Rumali Roti', price: '4.25' },
    { name: 'Aloo Fry', price: '13.5' },
    { name: 'Chicke65', price: '9.5' },
    { name: 'Chicken Tikka', price: '9' },
    { name: 'Chicken lollipop', price: '14.25' },
    { name: 'Prawn fry', price: '19.5' },
    { name: 'Ginger prawn', price: '18' },
    { name: 'Chicken Biryani', price: '14' },
    { name: 'Veg Biryani', price: '15' },
    { name: 'Mutton Biryani', price: '16' },
    { name: 'Prawn Biryani', price: '12.5' },
    { name: 'Dal Chawal', price: '10.4' },
    { name: 'Icecream', price: '7.25' }
  ];
  cartItems: Menu[] = [];

  getMenu(): Menu[] {
    return this.foodItems;
  }

  getCartItems(): Menu[] {
    return this.cartItems;
  }

  addToCart(item: Menu): void {
    this.cartItems.push(item);
  }
}
