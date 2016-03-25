import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  templateUrl: 'app/meal-list.component.html'
})

export class MealListComponent{
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filter: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  addMeal(values) {
    var meal = new Meal(values[0], values[1], values[2]);
    this.mealList.push(meal);
  }
  mealToEdit(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(filterOption) {
    this.filter = filterOption;

  }

}
