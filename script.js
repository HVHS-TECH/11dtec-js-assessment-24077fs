/****************************
Js Assessment Finn Seiler
****************************/

const OUTPUT = document.getElementById("Output");


console.log("Running Pristine Cuisine")
/****************************
Constants
****************************/





function displayProduct(ID,_name, _price){
   const LISTID =  document.getElementById(ID)
   LISTID.innerHTML +=  "<li>" + _name + " - $" + _price + "</li>";


}

console.log(document.getElementById("s4"));

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
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99)
displayProduct("s","",4.99) 




function getFormInput(){

   const NAME_FIELD = document.getElementById("nameField");
  var userName = NAME_FIELD.value;
  OUTPUT.innerHTML = "<p>Hello " + userName + "</p>";
}