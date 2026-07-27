    /****************************
    Js Assessment Finn Seiler
    ****************************/
    
    const OUTPUT = document.getElementById("Output");

    console.log("Running Pristine Cuisine")

    var receiptArray = JSON.parse(localStorage.getItem("cart")) || [];

    if (OUTPUT) {
        for (var i = 0; i < receiptArray.length; i++) {

            OUTPUT.innerHTML +=
                receiptArray[i].name +
                " - $" +
                receiptArray[i].price +
                "<br>";
        }
    }

    function displayProduct(ID, name, price){    //Displays products using an id system and turning products listed in the js into js objects
    const LISTID =  document.getElementById(ID)
    if(!LISTID){
        return;
    }
    LISTID.innerHTML +=  "<li>" + name + " - $" + price + "<button onClick=\"getProduct('" + name + "', " + price + ")\" >Order Now!</button>" + "</li>";
    }


    function getProduct(name, price){ //Pushes items ordered to an Array and Stringifies it for localstorage data transfer
    receiptArray.push({
    name: name,
    price: price
    });
    localStorage.setItem("cart", JSON.stringify(receiptArray));

    console.log(receiptArray);
    
    }

    function clearCart(){   //Clears cart completely
        OUTPUT.innerHTML =  ""
        receiptArray = [];
        localStorage.removeItem("cart");
        console.log("Cart Cleared")
    }



    function getFormInput(){ //Gets form input from HTML and prints Reciept using the array stored in localstorage
        OUTPUT.innerHTML = "";

    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyField");

    var userName = (NAME_FIELD.value);
    var userMoney = (MONEY_FIELD.value);

    var total = 0;

    for (var i = 0; i < receiptArray.length; i++){


    OUTPUT.innerHTML +=
    
        receiptArray[i].name +
        " - $" +
        receiptArray[i].price +
        "<br>";

        total += receiptArray[i].price;
    }

    if (total > userMoney){ //The if loop used to tell if the person has enouht money or not.
    OUTPUT.innerHTML +="<h2>Hello " + userName + "</h2>" 
    OUTPUT.innerHTML += "<p>How dare you not enter enough money to pay.</p>"
    return;

    } else {

    var change = userMoney - total;

    }

    console.log(total);
    console.log(OUTPUT);

    OUTPUT.innerHTML += 
    "<h2>Hello " + userName + "</h2>" +
    "<p>Total: $" + total.toFixed(2) + "</p>" +
    "<p>Money: $" + userMoney + "</p>" +
    "<p>Change: $" + change.toFixed(2) + "</p>";
    }


    //This abomination was used to display all the items on the menu every item is asigned to a section id. These id's are found on the HTML to put these items into a unordered list.
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
