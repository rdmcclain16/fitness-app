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

// const foodItems = ['Apples', 'Mango', 'Pineapple', 'Tomatoes', 'Nectarines', 'Cherries', 'Strawberries', 'Bananas', 'Grapes', 'Kiwi',
//     'Broccoli', 'Cabbage', 'Carrots', 'Celery', 'Brussels Sprouts', 'Asparagus', 'Collard Greens', 'Green Beens', 'String Beans', 'Bell Peppers',
//     'Eggs', 'Almonds', 'Chicken Breast', 'Oats', 'Cottage Cheese', 'Greek Yogurt', 'Lean Beef', 'Tuna', 'Quinoa', 'Salmon']

// const foodCals = ['96', '107', '74', '22', '60', '74', '49', '105', '104', '84', '80', '21', '52', '6', '38', '27', '11', '34', '34', '30',
//     '78', '164', '284', '307', '163', '100', '186', '128', '222', '175']

// function product(name, calories) {
//     this.name = name;
//     this.calories = calories;
//     allProducts.push(this);
// }
// new product('apples', '96')

// function sum(a, b) {

// }

// let fruit = [
//     {
//         'fruit1': 'Apples',
//         'fruit2': 'Mango',
//         'fruit3': 'Pineapple',
//         'fruit4': 'Tomatoes',
//         'fruit5': 'Nectarines',
//         'fruit6': 'Cherries',
//         'fruit7': 'Strawberries',
//         'fruit8': 'Bananas',
//         'fruit9': 'Grapes',
//         'fruit10': 'Kiwi',

//     }
// ]

// let fruitCals = [
//     {
//         'apples': '96 calories',
//         'mango': '107 calories',
//         'pineapples': '74 calories',
//         'tomatoes': '22 calories',
//         'nectarines': '60 calories',
//         'cherries': '74 calories',
//         'strawberries': '49 calories',
//         'banana': '105 calories',
//         'grapes': '104 calories',
//         'kiwi': '84 calories',
//     }
// ]

// let veggies = [
//     {
//         'veggie1': 'Broccoli',
//         'veggie2': 'Cabbage',
//         'veggie3': 'Carrots',
//         'veggie4': 'Celery',
//         'veggie5': 'Brussels Sprouts',
//         'veggie6': 'Asparagus',
//         'veggie7': 'Collard Greens',
//         'veggie8': 'Green Beans',
//         'veggie9': 'String Beans',
//         'veggie10': 'Bell Peppers',

//     }
// ]

// let veggieCals = [
//     {
//         'broccoli': '80',
//         'cabbage': '21',
//         'carrots': '52',
//         'celery': '6',
//         'brusselsSprouts': '38',
//         'asparagus': '27',
//         'collardGreens': '11',
//         'greenBeans': '34',
//         'stringBeans': '34',
//         'bellPeppers': '30',


//     }
// ]

// let proteins = [
//     {
//         'protein1': 'Eggs',
//         'protein2': 'Almonds',
//         'protein3': 'Chicken Breast',
//         'protein4': 'Oats',
//         'protein5': 'Cottage Cheese',
//         'protein6': 'Greek Yogurt',
//         'protein7': 'Lean Beef',
//         'protein8': 'Tuna',
//         'protein9': 'Quinoa',
//         'protein10': 'Salmon',

//     }
// ]

// let proteinCals = [
//     {
//         'eggs': '78',
//         'almonds': '164',
//         'chickenBreast': '284',
//         'oats': '307',
//         'cottageCheese': '163',
//         'greekYogurt': '100',
//         'leanBeef': '186',
//         'tuna': '128',
//         'quinoa': '222',
//         'salmon': '175',
//     }
// ]


// function sum(a, b) {
//     //eslint-disable-line

//     let theSum = a + b
//     let message = 'The sum of ' + a + ' and ' + b + ' is ' + theSum
//     return [theSum, message]
// }
// console.log(sum(asparagus, chickenBreast))
