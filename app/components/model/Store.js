import Product from './Products.js'

let shoe = new Product('nike', '//placehold.it/200x200', 49.99, 15)
let sandal = new Product('birkenstock', '//placehold.it/200x200', 59.95, 21)
let boot = new Product('thorogood', '//placehold.it/200x200', 189.99, 6)


class Store {
  constructor(cart, til, Product) {
    this.cart = []
    this.subtotal = 0
    this.tax = 0
    this.total = 0
    this.til = 0
    this.Products = []
    this.stockItem()
  }

  stockItem() {
    this.Products.push(shoe)
    this.Products.push(sandal)
    this.Products.push(boot)
  }

  getItems() {
    return this.Products
  }

  addToCart(index) {
    this.cart.push(this.Products[index])
    console.log(this.cart);
    return this.cart
  }

  //what am I looking for?
  totalCart(item) {
    let items = this.cart
    this.subtotal = 0
    this.tax = 0
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.quantity <= 0) {
        item.quantity = 0
        return
      }
      if (item.quantity > 0) {
        item.quantity--
        this.subtotal += item.price
        this.tax += item.price * 0.06
      }
    }
    this.total = this.subtotal + this.tax
    console.log('subTotal', this.subtotal);
    console.log('tax', this.tax);
    console.log('total', this.total);
  }

  checkOut() {
    this.subtotal = 0
    this.tax = 0
    this.total = 0
  }


  //check to see if product is actual product
  //if none available return out of stock in some way
  //check quantity to see if any are left in stock

  //need to be able to add to cart
  //sum up item cost by adding items based on how many times you click (subtotal)
  //come up with tax
  //add tax and item values to give total
  //if you pay for the items, update quantity and til values
  //return subtotal, tax and total back to zero.

}

export default Store