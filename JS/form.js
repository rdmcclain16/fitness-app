

function getFruitValue(){
    let getFruit = document.getElementById("qtyFruit").value;
    let fruitSlct = document.getElementById("fruits");
    let userFruitSlct = fruitSlct.options[fruitSlct.selectedIndex].value;
    let product = parseInt(getFruit) * parseInt(userFruitSlct);
    let display = document.getElementById("fruitcal");
    display.innerHTML += product;
    
    console.log(userFruitSlct);
    console.log(getFruit);
    console.log(product);
}

function getVegValue(){
    let getVeg = document.getElementById("qtyVeg").value;
    let vegSlct = document.getElementById("veggies");
    let userVegSlct = veg
    console.log(getVeg);
}

function getProteinValue(){
    let getProtein = document.getElementById("qtyProtein").value;
    console.log(getProtein);
}

function getCarbValue(){
    let getCarb = document.getElementById("qtyCarb").value;
    console.log(getCarb);
}

function getDairyValue(){
    let getDairy = document.getElementById("qtyDairy").value;
 
    console.log(getDairy);
}

//to get value from selection

function product(){
    let getFruit = document.getElementById("qtyFruit").value;
    let fruitSlct = document.getElementById("fruits");
    let userFruitSlct = fruitSlct.options[fruitSlct.selectedIndex].value;
    let result = getFruit * userFruitSlct;



}