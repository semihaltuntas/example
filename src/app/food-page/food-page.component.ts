import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterModule, CommonModule, TagsComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!:Food;

  constructor(private activatedRoute:ActivatedRoute,
    private foodService : FoodService)
    {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {
    
  }

}
