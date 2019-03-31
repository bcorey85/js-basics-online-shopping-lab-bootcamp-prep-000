var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return(cart)
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
  }
  
function viewCart() {
var itemList = []
if(cart.length === 0){
console.log('Your shopping cart is empty.')
}else{
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i])[0]
    var price = cart[i][itemName]
    itemList.push(`${itemName} at $${price}`)
  }
}
  console.log(`In your cart, you have ${itemList.join(`, `)}.`)
}

function total(){
  var total = 0
  for(var i = 0; i < cart.length; i++){
    var itemName = Object.keys(cart[i])[0]
    var price = cart[i][itemName]
    total += price
  }
  return total
}


function placeOrder(number){
  if(!number){
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else{
    var print = (`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    cart.length = 0
    console.log(print)
  }
}
