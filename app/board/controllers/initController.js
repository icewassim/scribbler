class InitController {
  static get $inject () {
    return ['CountStore'];
  }

  constructor () {
    this.init();
  }

  init () {
    this.testString = 'ONE';
  }
}

export default InitController;