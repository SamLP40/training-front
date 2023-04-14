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
   
  }
  // Méthode qui va récupérer les formations dans le LocalStorage
  getTrainings() {
    return this.getTrainings;
  }
  // Méthode qui va supprimer les formations du panier
  clearCart() {
    this.training =[];
  }

  // constructor() { }

}