

function getFruitValue(){
    let getFruit = document.getElementById("qtyFruit").value;
    let fruitSlct = document.getElementById("fruits");
    let userFruitSlct = fruitSlct.options[fruitSlct.selectedIndex].value;
    let fruitProduct = parseInt(getFruit) * parseInt(userFruitSlct);
    let display = document.getElementById("fruitcal");
    display.innerHTML += fruitProduct;
    
}

function getVegValue(){
    let getVeg = document.getElementById("qtyVeg").value;
    let vegSlct = document.getElementById("veggies");
    let userVegSlct = vegSlct.options[vegSlct.selectedIndex].value;
    let vegProduct = parseInt(getVeg) * parseInt(userVegSlct);
    let display = document.getElementById("veggiecal");
    display.innerHTML += vegProduct;
}

function getProteinValue(){
    let getProtein = document.getElementById("qtyProtein").value;
    let proteinSlct = document.getElementById("protein");
    let userProteinSlct = proteinSlct.options[proteinSlct.selectedIndex].value;
    let proteinProduct = parseInt(getProtein) * parseInt(userProteinSlct);
    let display = document.getElementById("proteincal");
    display.innerHTML += proteinProduct;}

function getCarbValue(){
    let getCarb = document.getElementById("qtyCarb").value;
    let carbSlct = document.getElementById("carb");
    let userCarbSlct = carbSlct.options[carbSlct.selectedIndex].value;
    let carbProduct = parseInt(getCarb) * parseInt(userCarbSlct);
    let display = document.getElementById("carbcal");
    display.innerHTML += carbProduct;}

function getDairyValue(){
    let getDairy = document.getElementById("qtyDairy").value;
    let dairySlct = document.getElementById("dairy");
    let userDairySlct = dairySlct.options[dairySlct.selectedIndex].value;
    let dairyProduct = parseInt(getDairy) * parseInt(userDairySlct);
    let display = document.getElementById("dairycal");
    display.innerHTML += dairyProduct;}

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
