import Store from './model/Store.js'

const ss = new Store()

class Service {
  constructor() { }
  getItems() {
    return ss.getItems()
  }

  getCartItems() {
    return ss.getCartItems()
  }

  addToCart(index) {
    ss.addToCart(index)
  }

  totalCart(item) {
    return ss.totalCart(item)
  }

}

export default Service