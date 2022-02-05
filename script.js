//Pizza Oven 
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("neopolitan thin", "marinara", ["mozzarella"], ["basil"]);
var pizza4 = pizzaOven("stuffed crust", "robust tomato sauce", ["mozzarella", "parmesean"], ["mushrooms", "chicken", "onions"]);


console.log(pizza1, pizza2, pizza3, pizza4)

//Random Pizza Generator 
function surprisePizzaOven(){

    var crustType = ["deep dish", "hand tossed", "neopolitan thin", "stuffed crust"];
    var sauceType = [ "traditional", "marinara", "robust tomato sauce", "afredo"];
    var cheeses = ["mozzarella", "feta", "parmesean"];
    var toppings = ["sausage", "pepperoni", "mushrooms", "olives", "onions", "chicken", "basil"];
    var randomPizza = []

    var randomCrust = Math.floor(Math.random()*Math.floor(crustType.length));
    var randomSauce = Math.floor(Math.random()*Math.floor(sauceType.length));
    var randomCheese = Math.floor(Math.random()*Math.floor(cheeses.length));
    var randomToppings = Math.floor(Math.random()*Math.floor(toppings.length));

    randomPizza.push(crustType[randomCrust])
    randomPizza.push(sauceType[randomSauce])
    randomPizza.push(cheeses[randomCheese])
    randomPizza.push(toppings[randomToppings])
    console.log(randomPizza);    

}

surprisePizzaOven();
