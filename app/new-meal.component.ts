import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: 'app/new-meal.component.html' 
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
