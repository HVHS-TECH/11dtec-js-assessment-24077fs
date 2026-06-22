/****************************
Js Assessment Finn Seiler
****************************/




console.log("Running Pristine Cuisine")
/****************************
Constants
****************************/





function displayProduct(ID,_name, _price){
   const LISTID =  document.getElementById(ID)
   LISTID.innerHTML +=  "<li>" + _name + " - $" + _price + "</li>";


}


displayProduct("s4","Eggs",5.99)
