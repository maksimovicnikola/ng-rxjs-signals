import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from './cart';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  cartCount = computed(() =>
    this.cartItems().reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
  );

  subTotal = computed(() =>
    this.cartItems().reduce(
      (accumulatedTotal, item) =>
        accumulatedTotal + item.quantity * item.product.price,
      0
    )
  );

  deliveryFee = computed(() => (this.subTotal() < 50 ? 5.99 : 0));

  tax = computed(() => Math.round(this.subTotal() * 0.1075));

  totalPrice = computed(
    () => this.subTotal() + this.deliveryFee() + this.tax()
  );

  eLength = effect(() =>
    console.log('Cart array length:', this.cartItems().length)
  );

  addToCart(product: Product): void {
    const cartItem: CartItem = {
      product,
      quantity: 1,
    };

    // We need to copy an array since adding and removing wouldn't send a signal notification
    this.cartItems.update((items) => [...items, cartItem]);
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartItems.update((items) =>
      items.filter((item) => item.product.id !== cartItem.product.id)
    );
  }

  updateQuantity(cartItem: CartItem, quantity: number): void {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === cartItem.product.id ? { ...item, quantity } : item
      )
    );
  }
}
