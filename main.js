import Controller from './app/components/Controller.js'
console.log('hello from main');

class App {
  constructor() {
    this.Controller = {
      Controller: new Controller()
    }
  }
}

window.app = new App()