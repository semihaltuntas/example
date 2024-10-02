import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent:string = 'center';

  tags?: Tag[];

  constructor(private foodService: FoodService) { }
  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}
