import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ngOnInit() {

  }

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  trainings: Training[] = [];
  
  addTraining(trainings: Training) {
    this.trainings.push(trainings);
  }
  
}