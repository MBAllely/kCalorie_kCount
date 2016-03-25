import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
    <div class="row">
      <div class="col-sm-8">
        <meal-display
          *ngFor="#currentMeal of mealList"
          [meal]="currentMeal"
          class="list-group-item row"
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
  public selectedMeal: Meal;
  addMeal(values) {
    var meal = new Meal(values[0], values[1], values[2]);
    this.mealList.push(meal);
  }
  mealToEdit(selectedMeal: Meal) {
    this.selectedMeal = selectedMeal;
    console.log(this.selectedMeal);
  }

}
