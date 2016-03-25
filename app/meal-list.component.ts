import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent],
  template: `
    <meal-display
      *ngFor="#currentMeal of mealList"
      [meal]="currentMeal"
      class="col-sm-8">
    </meal-display>
    <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
  `
})

export class MealListComponent{

}
