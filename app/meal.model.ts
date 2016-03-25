export class Meal {
  constructor(public name: string, public details: string, public calories: number){

  }
  getCalories() {
    return this.calories;
  }
}
