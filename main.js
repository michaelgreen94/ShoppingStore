import StoreController from './app/components/StoreController.js'

class App {
  constructor() {
    this.Controller = {
      StoreController: new StoreController()
    }
  }
}

window.app = new App()