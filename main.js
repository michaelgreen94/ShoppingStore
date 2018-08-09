import StoreController from './app/components/StoreController.js'
console.log('hello from main');

class App {
  constructor() {
    this.Controller = {
      StoreController: new StoreController()
    }
  }
}

window.app = new App()