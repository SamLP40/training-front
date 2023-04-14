import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Training } from '../model/training.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.css']
})
export class TrainingsDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    
  }
  addToCart(training: Training) {
    this.cartService.addToCart(training);
    window.alert('Vous avez ajouté une formation au panier.')

  }
}
