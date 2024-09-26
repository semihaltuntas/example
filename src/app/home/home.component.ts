import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
onRate($event: Event) {
throw new Error('Method not implemented.');
}
  foods:Food[] = [];

constructor(private foodService:FoodService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
        this.foods=this.foodService.getAll().filter(food=>
       food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
       else 
       this.foods = this.foodService.getAll();
    })
    
  }

}
