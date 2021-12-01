var items = require("./items.json")

class Cart{
 constructor(name, price, location) {
 this.name = name;
 this.location = location
 this.price = parseInt(price);
 }



 getcartdetails(){
   return " You have just added " + this.name + "(€" + this.price + ") to your cart."
 }


getitemdetails(){
 

return "item price: " + "€" + this.price + " order total inc Deliver to " + this.location + ": " + "€210" 

}
}


var cart = new Cart(items[0].name, items[0].price, "Dunboyne");
console.log(cart.getcartdetails())
console.log(cart.getitemdetails())

