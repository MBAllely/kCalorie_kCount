import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class HighCaloriesPipe implements PipeTransform {
  transform(input: Meal) {
    return input.getCalories() > 300;
  }
}
