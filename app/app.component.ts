import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="row">
      <meal-list
        [mealList]="meals">
      </meal-list>
    </div>
  <div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Sandwich", "Whole grain bread, Cucumbers, mushrooms, avocado, hummus, bell peppers, mayonnaise, red onions, and spinach", 500),
      new Meal("Pasta", "Fusilli pasta with pesto sauce", 315),
      new Meal("Curry Soup", "Sweet potato curry with broccoli and potatoes", 275),
      new Meal("Snack veggies", "Apple slices, celery sticks, carrots, and peanut butter", 250),
      new Meal("GUAC ATTACK", "Avocado baby", 400)
    ];
  }
}
