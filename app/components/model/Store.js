import Product from './Products.js'

let myStore = new Product()

class ShoeStore {
  constructor(cart, til, Product) {
    this.cart = []
    this.til = 0
    this.Products = [{
      name: 'nike',
      img: '//placehold.it/200x200',
      price: 49.99,
      quantity: 15
    }, {
      name: 'birkenstock',
      img: '//placehold.it/200x200',
      price: 59.95,
      quantity: 21,
    }, {
      name: 'thorogood',
      img: '//placehold.it/200x200',
      price: 189.99,
      quantity: 6,
    }]

  }

  // purchase() {
  //   nikes.purchase()
  //   sandals.purchase()
  //   boots.purchase()
  // }

  // get Product() {
  //   return {
  //     name: produc
  //     img: 
  //     price: 
  //     quantity: 
  //   }
  // }


  //need to be able to add to cart
  //sum up item cost by adding items based on how many times you click (subtotal)
  //come up with tax
  //add tax and item values to give total
  //if you pay for the items, update quantity and til values
  //return subtotal, tax and total back to zero.

}

export default ShoeStore