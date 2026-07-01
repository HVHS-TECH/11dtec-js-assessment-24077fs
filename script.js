/****************************
Js Assessment Finn Seiler
****************************/

const OUTPUT = document.getElementById("Output");


console.log("Running Pristine Cuisine")
/****************************
Constants
****************************/

var receiptArray = ["Reciept",];

const items = [];

function displayProduct(ID,name, price){
   items.push({
   name: name,
   price: price
   });
   
   
   const LISTID =  document.getElementById(ID)
   LISTID.innerHTML +=  "<li>" + name + " - $" + price + "<button onClick=\"getproduct('" + name + "', " + price + ")\" >Order Now!</button>" + "</li>";


}

displayProduct("s4","Pizza",4.99)
displayProduct("s4","Pasta",4.99)
displayProduct("s4","Lasanga",4.99)
displayProduct("s4","Risotto",4.99)
displayProduct("s4","Gelato",4.99)
displayProduct("s5","Dumplings",4.99)
displayProduct("s5","Fried Rice",4.99)
displayProduct("s5","Peking Duck",4.99)
displayProduct("s6","Tacos",4.99)
displayProduct("s6","Burritos",4.99)
displayProduct("s6","Enchiladas",4.99)
displayProduct("s6","Gaucamole",4.99)
displayProduct("s7","Sushi",4.99)
displayProduct("s7","Ramen",4.99)
displayProduct("s7","Tempura",4.99)
displayProduct("s7","Udon",4.99)
displayProduct("s9","Butter Chicken",4.99)
displayProduct("s9","Curry",4.99)
displayProduct("s9","Naan",4.99)
displayProduct("s9","Biryani",4.99)
displayProduct("s10","Crossant",4.99)
displayProduct("s10","Bageutte",4.99)
displayProduct("s10","Coq Au Vin",4.99)
displayProduct("s10","Crème brûlée",4.99)
displayProduct("s11","Shawarma",4.99)
displayProduct("s11","Falafel",4.99)
displayProduct("s11","Hummus",4.99)
displayProduct("s11","Kababs",4.99)
displayProduct("s12","Burger",4.99)
displayProduct("s12","BBQ",4.99)
displayProduct("s12","Fried Chicken",4.99)
displayProduct("s12","Mac and Cheese",4.99)
displayProduct("s13","Pad Thai",4.99)
displayProduct("s13","Green Curry",4.99)
displayProduct("s13","Tom Yum Soup",4.99)
displayProduct("s14","Gyros",4.99)
displayProduct("s14","Souvlaki",4.99)
displayProduct("s14","Moussaka",4.99)
displayProduct("s14","Tzatziki",4.99)


function getproduct(name, price){
receiptArray.push({
   name:name,
   price:price
}) 
   console.log(receiptArray);
}


function getFormInput(){

   const NAME_FIELD = document.getElementById("nameField");
  var userName = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Hello " + userName + "</p>";
}


console.log(items);