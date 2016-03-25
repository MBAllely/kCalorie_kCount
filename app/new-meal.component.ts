import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form col-sm-4">
      <h3>Add a meal: </h3>
      <input type="text" placeholder="Name" class="input-lg" #newName>
      <input type="text" placeholder="Details" class="input-lg" #newDetails>
      <input type="number" placeholder="Calories" class="input-lg" #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-lg add-button">Add</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Object[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([name.value, details.value, parseInt(calories.value)]);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
