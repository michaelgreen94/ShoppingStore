import Store from './model/Store.js'
console.log('hello from service');

const ss = new Store()

class Service {
  constructor() { }
  getItems() {
    return ss.getItems()
  }

  addToCart(index) {
    ss.addToCart(index)
  }

  totalCart(item) {
    ss.totalCart(item)
  }

}

export default Service