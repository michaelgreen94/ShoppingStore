console.log('hello from the product');

class Product {
  constructor(name = '', img = '', price = 0, quantity = 0) {
    this.outOfStock = false
    this.products = {
      name: name,
      img: img,
      price: price,
      quantity: quantity
    }
  }

  purchase() {
    if (this.outOfStock) {
      return
    }
    if (this.products.name) {
      if (this.products.quantity) {
        this.products.quantity--
      }
      if (this.products.quantity <= 0) {
        this.products.quantity = 0
        this.outOfStock = true
      }
    }
  }

  //check to see if product is actual product
  //if none available return out of stock in some way
  //check quantity to see if any are left in stock
}

export default Product