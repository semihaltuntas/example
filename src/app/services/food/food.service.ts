import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/img/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '20-30',
        price: 20,
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/img/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/img/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '15-20',
        price: 2,
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/img/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
         id: 5,
        name: 'Chicken Soup',
        cookTime: '40-50',
        price: 11,
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/img/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: ' Vegetables Pizza',
        cookTime: '40-50',
        price: 9,
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/img/food-6.jpg',
        tags: ['FastFood', 'Pizza','Lunch'],
      }
    ]
  }
}