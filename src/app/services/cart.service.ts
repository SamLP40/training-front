import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
// Services = équivalent du CRUD mariaDB, en Angular
@Injectable({
  providedIn: 'root'
})

export class CartService {
  
items: Training[] = [];
 
  addToCart(training: Training) {
  
    this.items.push(training); // Les formations sont stockées dans le LocalStorage (service)
    window.alert('Vous avez ajouté une formation au panier.')
  }
  // Méthode qui va récupérer les formations dans le LocalStorage
  getItems() {
    return this.items;
  }
  // Méthode qui va supprimser les formations du panier
  clearCart() {
    this.items =[];
    return this.items;
  }
  cart!: Map<number, Training>; // Comment initialiser la map ?

  setTrainings() { 
  let cart = localStorage.getItem('cart');
  if(cart){  // le panier existe déjà
    this.cart = new Map(JSON.parse(cart));
  } // création du panier
  else this.cart = new Map<number,Training>();
}

  constructor() { }
  getCart() {
    return Array.from(this.cart.values());

}
}