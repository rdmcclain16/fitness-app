'use strict'


let foods =[
    {
        name: 'apple',
        foodType: 'fruit',
        calories: 96

    },
    {
        name: 'banana',
        foodType: 'fruit',
        calories: 105
    },
    {
        name:'mango',
        foodType: 'fruit',
        calories: 107

    },
     {
        name:'pineapple',
        foodType: 'fruit',
        calories: 74

    },
    {
        name:'kiwi',
        foodType:'fruit',
        calories: 84

    },
    {
        name:'cherries',
        foodType:'fruit',
        calories: 74

    },
    {
        name:'strawberries',
        foodType:'fruit',
        calories: 49

    },
    {
        name: 'grapes',
        foodType: 'fruit',
        calories: 104 
    },
    {
        name: 'tomato',
        foodType: 'fruit',
        calories: 22 
    },
    {
        name: 'blueberries',
        foodType: 'fruit',
        calories: 85
    },
    {
        name: 'peach',
        foodType: 'fruit',
        calories: 50 
    },
    {
        name: 'raspberries',
        foodType: 'fruit',
        calories: 52
    },
    {
        name: 'cantaloupe',
        foodType: 'fruit',
        calories: 186 
    },
    {
        name: 'watermelon',
        foodType: 'fruit',
        calories: 85 
    },
    {
        name: 'pear',
        foodType: 'fruit',
        calories: 102 
    },
    // start of dairy items
    {
        name: 'one percent',
        foodType: 'dairy/non-dairy',
        calories: 103
    },
    {
        name: 'two percent',
        foodType: 'dairy/non-dairy',
        calories: 103
    },
    {
        name: 'almond milk',
        foodType: 'dairy/non-dairy',
        calories: 60
    },
    {
        name: 'coconut milk',
        foodType: 'dairy/non-dairy',
        calories: 34
    },
    {
        name: 'mozzarella',
        foodType: 'dairy/non-dairy',
        calories: 78
    },
    {
        name: 'cheddar',
        foodType: 'dairy/non-dairy',
        calories: 113
    },
    {
        name: 'parmesan',
        foodType: 'dairy/non-dairy',
        calories: 22
    },
    {
        name: 'butter',
        foodType: 'dairy/non-dairy',
        calories: 102
    },
    {
        name: 'greek yogurt',
        foodType: 'dairy/non-dairy',
        calories: 100
    },
    {
        name: 'low fat yogurt',
        foodType: 'dairy/non-dairy',
        calories: 100
    },
    {
        name: 'vanilla ice cream',
        foodType: 'dairy/non-dairy',
        calories: 137
    },
    {
        name: 'chocolate ice cream',
        foodType: 'dairy/non-dairy',
        calories: 143
    },
    {
        name: 'sour cream',
        foodType: 'dairy/non-dairy',
        calories: 23
    },
    {
        name: 'creamer',
        foodType: 'dairy/non-dairy',
        calories: 20
    },
    // start of veggie items
        {
            name: 'broccoli',
            foodType: 'veggies',
            calories: 80
        },
        {
            name: 'cabbage',
            foodType: 'veggies',
            calories: 21
        },
        {
            name: 'carrots',
            foodType: 'veggies',
            calories: 52
        },
        {
            name: 'celery',
            foodType: 'veggies',
            calories: 6
        },
        {
            name: 'brussels sprouts',
            foodType: 'veggies',
            calories: 38
        },
        {
            name: 'asparagus',
            foodType: 'veggies',
            calories: 27
        },
        {
            name: 'collard greens',
            foodType: 'veggies',
            calories: 11
        },
        {
            name: 'green beans',
            foodType: 'veggies',
            calories: 34
        },
        {
            name: 'string beans',
            foodType: 'veggies',
            calories: 34
        },
        {
            name: 'bell peppers',
            foodType: 'veggies',
            calories: 30
        },
        {
            name: 'spinach',
            foodType: 'veggies',
            calories: 7
        },
        {
            name: 'corn',
            foodType: 'veggies',
            calories: 132
        },
        {
            name: 'sweet potato',
            foodType: 'veggies',
            calories: 112
        },
        {
            name: 'potato',
            foodType: 'veggies',
            calories: 168
        },
        {
            name: 'cauliflower',
            foodType: 'veggies',
            calories: 25
        },
        {
            name: 'kale',
            foodType: 'veggies',
            calories: 34
        },
        {
            name: 'cucumber',
            foodType: 'veggies',
            calories: 34
        },
        {
            name: 'onion',
            foodType: 'veggies',
            calories: 67
        },
        {
            name: 'zucchini',
            foodType: 'veggies',
            calories: 20
        },
        
        // start of dairy items
        {
            name: 'eggs',
            foodType: 'protein',
            calories: 78
        },
        {
            name: 'almonds',
            foodType: 'protein',
            calories: 164
        },
        {
            name: 'chicken breast',
            foodType: 'protein',
            calories: 284,
        },
        {
            name: 'chicken thigh',
            foodType: 'protein',
            calories: 226
        },
        {
            name: 'chicken leg',
            foodType: 'protein',
            calories: 233
        },
        {
            name: 'cottage cheese',
            foodType: 'protein',
            calories: 163
        },
        {
            name: 'greek yogurt',
            foodType: 'protein',
            calories: 100
        },
        {
            name: 'lean beef',
            foodType: 'protein',
            calories: 186
        },
        {
            name: 'tuna',
            foodType: 'protein',
            calories: 128
        },
        {
            name: 'quinoa',
            foodType: 'protein',
            calories: 222
        },
        {
            name: 'salmon',
            foodType: 'protein',
            calories: 175
        },
        {
            name: 'shrimp',
            foodType: 'protein',
            calories: 99
        },
        {
            name: 'turkey breast',
            foodType: 'protein',
            calories: 146
        },
        {
            name: 'turkey bacon',
            foodType: 'protein',
            calories: 31
        },
        {
            name: 'turkey sausage',
            foodType: 'protein',
            calories: 56
        },
        {
            name: 'chicken sausage',
            foodType: 'protein',
            calories: 49
        },
        // start of carb items
        {
            name: 'bagel',
            foodType: 'carb',
            calories: 245
        },
        {
            name: 'sliced white bread',
            foodType: 'carb',
            calories: 79
        },
        {
            name: 'sliced wheat bread',
            foodType: 'carb',
            calories: 69
        },
        {
            name: 'dinner roll',
            foodType: 'carb',
            calories: 84
        },
        {
            name: 'white rice',
            foodType: 'carb',
            calories: 204
        },
        {
            name: 'brown rice',
            foodType: 'carb',
            calories: 214
        },
        {
            name: 'jasmine rice',
            foodType: 'carb',
            calories: 238
        },
        {
            name: 'basmati rice',
            foodType: 'carb',
            calories: 177
        },
        {
            name: 'biscuit',
            foodType: 'carb',
            calories: 212
        },
        {
            name: 'flour tortilla',
            foodType: 'carb',
            calories: 95
        },
        {
            name: 'cornbread',
            foodType: 'carb',
            calories: 80
        },
        {
            name: 'soft pretzel',
            foodType: 'carb',
            calories: 483
        },
        {
            name: 'english muffin',
            foodType: 'carb',
            calories: 132
        },
        {
            name: 'crouton',
            foodType: 'carb',
            calories: 122
        },
        {
            name: 'rye',
            foodType: 'carb',
            calories: 83
        },
    ]

    function getFruitValue(){
        let getFruit = document.getElementById("qtyFruit").value;
        let fruitSlct = document.getElementById("fruits");
        let userFruitSlct = fruitSlct.options[fruitSlct.selectedIndex].value;
        let product = userFruitSlct * getFruit
        console.log(userFruitSlct);
        console.log(getFruit);
        console.log(product);
    }
    function getVeggiesValue(){
        let getVeggies = document.getElementById("qtyVeggies").value;
        let veggiesSlct = document.getElementById("veggies");
        let userVeggiesSlct = veggiesSlct.options[veggiesSlct.selectedIndex].value;
        let product = userVeggiesSlct * getVeggies
        console.log(userVeggiesSlct);
        console.log(getVeggies);
        console.log(product);
    }
    function getProteinValue(){
        let getProtein = document.getElementById("qtyProtein").value;
        let proteinSlct = document.getElementById("protein");
        let userProteinSlct = proteinSlct.options[proteinSlct.selectedIndex].value;
        let product = userProteinSlct * getProtein
        console.log(userProteinSlct);
        console.log(getProtein);
        console.log(product);
    }
    function getCarbValue(){
        let getCarb = document.getElementById("qtyCarb").value;
        let carbSlct = document.getElementById("carb");
        let userCarbSlct = carbSlct.options[carbSlct.selectedIndex].value;
        let product = userCarbSlct * getCarb
        console.log(userCarbSlct);
        console.log(getCarb);
        console.log(product);
    }
    function getDairyValue(){
        let getDairy = document.getElementById("qtyDairy").value;
        let dairySlct = document.getElementById("dairy");
        let userDairySlct = dairySlct.options[dairySlct.selectedIndex].value;
        let product = userDairySlct * getDairy
        console.log(userDairySlct);
        console.log(getDairy);
        console.log(product);
    }
    
    
    