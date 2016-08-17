class InitController {
  static get $inject () {
    return ['CountStore'];
  }

  constructor () {
    this.init();
  }

  init () {
    console.log("hello");
    this.testString = 'ONE';
  }
}

export default InitController;
