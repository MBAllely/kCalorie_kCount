import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorieSorter",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var calories = args[0];
    if (calories === "high") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if (calories === "low") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else {
      return input;
    }
  }
}
