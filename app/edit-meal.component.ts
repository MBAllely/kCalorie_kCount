import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  templateUrl: 'app/edit-meal.component.html' 
})

export class EditMealComponent {
  public meal: Meal;
}
