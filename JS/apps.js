// OBJECT CONSTRUCTOR
function Food(item, calories) {
    this.item = item;
    this.calories = calories;
    this.updateItem = function () {
        return ++this.item
    };
}

let food1 = new Food('Apple', 96);
let food2 = new Food('Mango', 107);
let food3 = new Food('Pineapple', 74);
let food4 = new Food('Tomatoes', 22);
let food5 = new Food('Nectarines', 60);
let food6 = new Food('Cherries', 74);
let food7 = new Food('Strawberries', 49);
let food8 = new Food('Bananas', 105);
let food9 = new Food('Grapes', 104);
let food10 = new Food('Kiwi', 84);
let food11 = new Food('Broccoli', 80);
let food12 = new Food('Cabbage', 21);
let food13 = new Food('Carrots', 52);
let food14 = new Food('Celery', 6);
let food15 = new Food('Brussels Sprouts', 38);
let food16 = new Food('Asparagus', 27);
let food17 = new Food('Collard Greens', 11);
let food18 = new Food('Green Beans', 34);
let food19 = new Food('String Beans', 34);
let food20 = new Food('Bell Peppers', 30);
let food21 = new Food('Eggs', 78);
let food22 = new Food('Almonds', 164);
let food23 = new Food('Chicken Breast', 284);
let food24 = new Food('Cottage Cheese', 163);
let food25 = new Food('Greek Yogurt', 100);
let food26 = new Food('Lean Beef', 186);
let food27 = new Food('Tuna', 128);
let food28 = new Food('Quinoa', 222);
let food29 = new Food('Salmon', 175);
let food30 = new Food('Oats', 307);

console.log(food1.updateItem());
