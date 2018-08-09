import Store from './model/Store.js'

const ss = new Store()

class Service {
  constructor() { }
  getItems() {
    return ss.getItems()
  }

  addToCart(index) {
    return ss.addToCart(index)
  }

  totalCart(item) {
    ss.totalCart(item)
  }

}

export default Service