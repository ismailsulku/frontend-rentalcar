import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[] = ['Car', 'Brand', 'Color', 'Rental', 'Customer'];

  currentCategory: string = 'Car';

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  getCurrentCategory(category: string) {
    if (category == this.currentCategory) {
      return 'list-group-item list-group-item-action list-group-item-light active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-dark';
    }
  }
  
}
