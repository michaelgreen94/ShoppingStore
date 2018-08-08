import Product from './Product.js'

let nikes = new Product('nike', '//placehold.it/200x200', 49.99, 15)
let sandals = new Product('birkenstock', '//placehold.it/200x200', 59.95, 21)
let boots = new Product('thorogood', '//placehold.it/200x200', 189.99, 6)
let myStore = new Product()

class ShoeStore {
  constructor(cart, til) {
    this.cart = []
    this.til = 0
  }

  purchase() {
    nikes.purchase()
    sandals.purchase()
    boots.purchase()

  }



  get Product() { //will only get me a copy of my nikes object
    return {
      name: nikes.products.name,
      img: nikes.products.img,
      price: nikes.products.price,
      quantity: nikes.products.quantity
    }
  }
  //need to be able to add to cart
  //sum up item cost by adding items based on how many times you click (subtotal)
  //come up with tax
  //add tax and item values to give total
  //if you pay for the items, update quantity and til values
  //return subtotal, tax and total back to zero.

}

export default ShoeStore