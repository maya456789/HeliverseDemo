import { Component } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  constructor(private cartService: CartServiceService) { }

  onClear(){
    return this.items=this.cartService.clearCart();
  }
}
