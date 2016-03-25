import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { HighCaloriesPipe } from './high-calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HighCaloriesPipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
    <div class="row">
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all">Show All</option>
        <option value="high">Show High Calorie Meals</option>
        <option value="low">Show Low Calorie Meals</option>
      </select>
    </div>
    <div class="row">
      <div class="col-sm-8">
        <meal-display
          *ngFor="#currentMeal of mealList"
          [meal]="currentMeal"
          class="list-group-item row"
          (click)="mealToEdit(currentMeal)"
          [class.active]="currentMeal === selectedMeal"
          (onMealSelect)="mealToEdit($event)">
        </meal-display>
      </div>
      <div class="col-sm-4">
        <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
        <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
      </div>
    </div>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
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

}
