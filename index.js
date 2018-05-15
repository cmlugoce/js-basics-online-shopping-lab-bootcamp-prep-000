var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
<<<<<<< HEAD
  var price = Math.floor(Math.random() * 100) + 1;
  var newItem = {
    itemName: item,
    itemPrice: price,
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
=======
  var itemAndPrice = {};
  var price = Math.floor(Math.random() * 100) + 1;
  itemAndPrice[item] = price;
  cart.push(itemAndPrice);
  console.log(item + " has been added to your cart.");
  return cart;

}

function removeFromCart(item) {
  var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
   }
  }
  if (!itemInCart) {
    console.log("That is not in your cart.");
  }
  return cart
>>>>>>> 551f35f3195ac618cc9ed34b97fb3c3997bf1e20
}

function total() {
  // iterates over cart items & adds their prices
  //returns total;
<<<<<<< HEAD
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}


function viewCart(){
   var array = [];

  for ( let i = 0; i < cart.length; i++) {
      array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;}

  if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if (cart.length ===2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }else{
    let lastItem = array.pop();
    return `In your cart, you have ${array.join(', ')}, and ${lastItem}.`
  }
}


 function placeOrder(cardNumber){
    if (cardNumber){
    let totalCost = total();
    cart =[];
    return`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
=======
    var totalCost = 0;

    for(var i = 0; i < getCart().length; i++){
      for(var cost in getCart()[i]){
        totalCost += getCart()[i][cost];
      }
    }
    return totalCost;
}


function viewCart(){
   if (cart.length === 0){
     console.log("Yourping cart is empty.")
   } else {
     var itemsAndPrices = [];

     for (var i in cart){
       var itemAndPrice = cart[i];
       for (var key in itemAndPrice){
         itemsAndPrices.push(key + " at $" + itemAndPrice[key])
       }
     }
     var cartItems = itemsAndPrices.join(", ");
     console.log("In cart, you have " + cartItems + ".")
   }
 }


 function placeOrder(cc){
    if(!cc){
     console.log("Wet have a credit card on file for you to place your order.");
   } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
     cart = [];

   }

  }
>>>>>>> 551f35f3195ac618cc9ed34b97fb3c3997bf1e20
