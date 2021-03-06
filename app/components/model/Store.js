import Product from './Products.js'

let shoe = new Product('nike', 'http://www.lieventavernier.com/images/product/nike%20sb%20clutch-914wxx.jpg', 49.99, 15)
let sandal = new Product('birkenstock', 'http://cdn.shopify.com/s/files/1/0690/2837/products/AZ_TobOL_800x.png?v=1437597511', 59.95, 21)
let boot = new Product('thorogood', 'http://workbootsguru.com/wp-content/uploads/2016/02/4.png', 189.99, 6)


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

  getCartItems() {
    return this.cart
  }

  addToCart(index) {
    let item = this.Products[index]
    if (item.quantity <= 0) {
      return
    }
    item.quantity--
      let cartItem = this.cart.find(cartItem => item.name == cartItem.name)
    if (cartItem) {
      cartItem.quantity++
        return
    }
    this.cart.push({
      name: item.name,
      price: item.price,
      quantity: 1
    })

    console.log(this.cart);
  }

  //what am I looking for?
  totalCart(item) {
    let items = this.cart
    this.subtotal = 0
    this.tax = 0
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      this.subtotal += item.price * item.quantity
      this.tax += item.price * 0.06 * item.quantity
    }
    this.total = this.subtotal + this.tax
    return {
      subtotal: this.subtotal,
      tax: this.tax,
      total: this.total
    }
  }

  checkOut() {
    this.subtotal = 0
    this.tax = 0
    this.total = 0
    this.cart = []
    return {
      subtotal: this.subtotal,
      tax: this.tax,
      total: this.total,
      cart: this.cart
    }
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