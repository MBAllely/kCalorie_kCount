import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent],
  template: `
    <div class="row">
      <div class="col-sm-8">
        <meal-display
          *ngFor="#currentMeal of mealList"
          [meal]="currentMeal"
          class="list-group-item row">
        </meal-display>
      </div>
      <div class="col-sm-4">
        <new-meal (onSubmitNewMeal)="addMeal($event)"></new-meal>
      </div>
    </div>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  addMeal(name: string, details: string, calories: number) {
    this.mealList.push(
      new Meal(name, details, calories)
    );
  }
}
