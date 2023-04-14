import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
// Services = équivalent du CRUD mariaDB, en Angular
@Injectable({
  providedIn: 'root'
})

export class CartService {
  
training: Training[] = [];
 
  addTraining(training: Training) {
  
    this.training.push(training); // Les formations sont stockées dans le LocalStorage (service)
    window.alert('Vous avez ajouté une formation au panier.')
  }
  // Méthode qui va récupérer les formations dans le LocalStorage
  getTrainings() {
    return this.getTrainings;
  }
  // Méthode qui va supprimser les formations du panier
  clearCart() {
    this.training =[];
    return this.training;
  }
  cart!: Map<number, Training>;
  
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