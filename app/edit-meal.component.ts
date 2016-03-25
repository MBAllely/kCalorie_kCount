import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form form-inline">
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
