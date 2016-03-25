import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form form-inline">
      <div class="details-display">
        <h2>{{ meal.name }}</h2>
        <h5> Details: {{ meal.details }}</h5>
        <h5> Calories: {{ meal.calories }}</h5>
      </div>
      <h3>Edit Meal: </h3>
      <input [(ngModel)]="meal.name" type="text" class="form-control input-lg">
      <input [(ngModel)]="meal.details" type="text" class="form-control input-lg">
      <input [(ngModel)]="meal.calories" type="number" class="form-control input-lg">
    </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
