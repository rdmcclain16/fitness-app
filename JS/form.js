


function getFruitValue(){
    let getFruit = document.getElementById("qtyFruit").value;
    let fruitSlct = document.getElementById("fruits");
 
    let userFruitSlct = fruitSlct.options[fruitSlct.selectedIndex].value;
    let totalFruitCal = parseInt(getFruit) * parseInt(userFruitSlct);
    let display = document.getElementById("fruitcal");
    display.innerHTML += totalFruitCal;
    console.log(getFruit)
  
}


function getVegValue(){
    let getVeg = document.getElementById("qtyVeg").value;
    let vegSlct = document.getElementById("veggies");
    let userVegSlct = vegSlct.options[vegSlct.selectedIndex].value;
    let totalVegCal = parseInt(getVeg) * parseInt(userVegSlct);
    let display = document.getElementById("veggiecal");
    display.innerHTML += totalVegCal;
}

function getProteinValue(){
    let getProtein = document.getElementById("qtyProtein").value;
    let proteinSlct = document.getElementById("protein");
    let userProteinSlct = proteinSlct.options[proteinSlct.selectedIndex].value;
    let totalProteinCal = parseInt(getProtein) * parseInt(userProteinSlct);
    let display = document.getElementById("proteincal");
    display.innerHTML += totalProteinCal;}

function getCarbValue(){
    let getCarb = document.getElementById("qtyCarb").value;
    let carbSlct = document.getElementById("carb");
    let userCarbSlct = carbSlct.options[carbSlct.selectedIndex].value;
    let totalCarbCal = parseInt(getCarb) * parseInt(userCarbSlct);
    let display = document.getElementById("carbcal");
    display.innerHTML += totalCarbCal;}


    
function getDairyValue(){
    let getDairy = document.getElementById("qtyDairy").value;
    let dairySlct = document.getElementById("dairy");
    let userDairySlct = dairySlct.options[dairySlct.selectedIndex].value;
    let totalDairyCal = parseInt(getDairy) * parseInt(userDairySlct);
    let display = document.getElementById("dairycal");
    display.innerHTML += totalDairyCal;
}

//to get value from selection



function reset(){
    alert('Total Calories are now Reset');
    document.getElementById("form").reset();
   document.getElementById("fruitcal").innerHTML ="";
   document.getElementById("veggiecal").innerHTML ="";
   document.getElementById("proteincal").innerHTML ="";
   document.getElementById("carbcal").innerHTML ="";
   document.getElementById("dairycal").innerHTML ="";
}



//function to give running displayed total
function calorieTotal(){

  let howMany = parseInt(document.getElementById("qtyDairy").value);
  let item = document.getElementById("dairy");
  let itemSelect = item.options[item.selectedIndex].value;
 
    let itemCalories = parseInt(howMany) * parseInt(itemSelect);

//get running total from the total text box
    let runTotal = parseFloat(document.getElementById("total").value);

    document.getElementById("total").value = (itemCalories + runTotal).toFixed(2);

    //add item to display
    document.getElementById("total").innerHTML += "</br>" + itemSelect.innerHTML + "x" + howMany + "" + itemCalories.toFixed(2);
    console.log(itemSelect);
    console.log(howMany);


}

calorieTotal();
