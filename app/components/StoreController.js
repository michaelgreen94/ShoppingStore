import StoreService from './StoreService.js'

const service = new StoreService()

function draw() {
  let items = service.getItems()
  let template = ''
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `
    <div>
    <div>
      <img onclick="app.Controller.StoreController.addToCart(${i})" src="${item.img}" alt="item img" />
    </div>
    <h3>${item.name}</h3>
    <h3>Price: ${item.price}</h3>
    <h3>Available: ${item.quantity}</h3>
    </div>`
  }
  document.getElementById('item').innerHTML = template

}

function drawCart() {
  let cartItems = service.addToCart()
  let template = ''
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    template += `
    <div>
    <h3>Subtotal: </h3>
    <h3>Tax: </h3>
    <h3>Total: </h3>
    </div>`
  }
  document.getElementById('cart').innerHTML = template
}


class Controller {
  constructor() { }

  addToCart(index) {
    service.addToCart(index)
    // this.totalCart()
    drawCart()
  }

  totalCart(item) {
    service.totalCart(item)
  }

}

draw()

export default Controller