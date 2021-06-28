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
        let TotalFruitCal = parseInt(userFruitSlct) * parseInt(getFruit);
        let display = document.getElementById("fruitcal");
        display.innerHTML += TotalFruitCal;

        console.log('Each cup is ' + userFruitSlct + ' calories');
        console.log('The quantity is ' + getFruit);
        console.log('The total calories is ' + TotalFruitCal);
    }
    function getVeggiesValue(){
        let getVeggies = document.getElementById("qtyVeggies").value;
        let veggiesSlct = document.getElementById("veggies");
        let userVeggiesSlct = veggiesSlct.options[veggiesSlct.selectedIndex].value;
        let TotalVegCal = parseInt(userVeggiesSlct) * parseInt(getVeggies);
        let display = document.getElementById('veggiescal');
        display.innerHTML += TotalVegCal;

        console.log('Each cup is ' + userVeggiesSlct + ' calories');
        console.log('The quantity is ' + getVeggies);
        console.log('The total calories is ' + TotalVegCal);
    }
    function getProteinValue(){
        let getProtein = document.getElementById("qtyProtein").value;
        let proteinSlct = document.getElementById("protein");
        let userProteinSlct = proteinSlct.options[proteinSlct.selectedIndex].value;
        let TotalProteinCal = parseInt(userProteinSlct) * parseInt(getProtein);
        let display = document.getElementById('proteincal');
        display.innerHTML += TotalProteinCal;

        console.log('Each cup is ' + userProteinSlct + ' calories');
        console.log('The quantity is ' + getProtein);
        console.log('The total calories is ' + TotalProteinCal);
        
    }
    function getCarbValue(){
        let getCarb = document.getElementById("qtyCarb").value;
        let carbSlct = document.getElementById("carb");
        let userCarbSlct = carbSlct.options[carbSlct.selectedIndex].value;
        let TotalCarbCal = parseInt(userCarbSlct) * parseInt(getCarb);
        let display = document.getElementById("carbcal");
        display.innerHTML += TotalCarbCal;

        console.log('Each cup is ' + userCarbSlct + ' calories');
        console.log('The quantity is ' + getCarb);
        console.log('The total calories is ' + TotalCarbCal);
    }
    function getDairyValue(){
        let getDairy = document.getElementById("qtyDairy").value;
        let dairySlct = document.getElementById("dairy");
        let userDairySlct = dairySlct.options[dairySlct.selectedIndex].value;
        let TotalDairyCal = parseInt(userDairySlct) * parseInt(getDairy);
        let display = document.getElementById("dairycal");
        display.innerHTML += TotalDairyCal;

        console.log('Each cup is ' + userDairySlct + ' calories');
        console.log('The quantity is ' + getDairy);
        console.log('The total calories is ' + TotalDairyCal);
    }
    
    
    function reset() {
        alert("Total Calories are now Reset!");
        document.getElementById("form").reset();
        document.getElementById("fruitcal").innerHTML = "";
        document.getElementById("veggiescal").innerHTML = "";
        document.getElementById("proteincal").innerHTML = "";
        document.getElementById("carbcal").innerHTML = "";
        document.getElementById("dairycal").innerHTML = "";
        document.getElementById("totalcal").innerHTML = "";
    }

    // function totCalories() {
    //     let total = parseInt(TotalCarbCal.value) + parseInt(TotalDairyCal.value);
    //     let display = document.getElementById("total").value;
    //     display.innerHTML += total;

    //     console.log('the total amount of calories consumed today was ' + total)
    // }

    function calcSum() {
        let num1 = document.getElementById("fruitcal");
        let num2 = document.getElementById("veggiescal");
        let num3 = document.getElementById("proteincal");
        let num4 = document.getElementById("carbcal");
        let num5 = document.getElementById("dairycal");
        let numbers = parseInt(num1.innerText) + parseInt(num2.innerText) + parseInt(num3.innerText) + parseInt(num4.innerText) + parseInt(num5.innerText);
        let display = document.getElementById("numbers");
        display.innerHTML += numbers;

        console.log(numbers);
    }

    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');
    
    // var dataPoints = [],
    var myData = [{id: "TotalFruitCal"}, {id: "TotalVegCal"}, {id: "TotalProteinCal"}, {id: "TotalCarbCal"}, {id: "TotalDairyCal"}];
    
    new Chart(ctx, {
      type: 'bar',
      title: {
        text: "Daily Caloric Intake"
      },
      data: {
        labels: ['Fruit', 'Vegetable', 'Protein',  'Carb', 'Dairy', 'Total'],
        datasets: [{
          label: 'Caloric Intake',
          data: myData,
        //   data: [ 
        //     {y: "TotalDairyCal", label: "Dairy"},
        //     {y: "TotalCarbCal", label: "Carb"},
        //     {y: "TotalProteinCal", label: "Protein"},
        //     {y: "TotalVegCal", label: "Vegetable"},
        //     {y: "TotalFruitCal", label: "Fruit"},
        //     {y: "numbers", label: "Total"},
        //   ]
          backgroundColor: [
            '#000000',
            '#ffffff',
            'indigo',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
