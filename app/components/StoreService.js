import Store from './model/Store.js'
console.log('hello from service');

const ss = new Store()

class Service {
  constructor() {}
  getItems() {
    return ss.getItems()
  }

  addToCart(index) {
    ss.addToCart(index)
  }

  totalCart(index) {
    ss.totalCart(index)
  }

}

export default Service