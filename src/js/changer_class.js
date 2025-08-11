export class Changer {
  #button;
  #changeNode;
  #classForChange;
  #body;
  #bodyClass;

  #addClass = () => {
    for (const element of this.#changeNode) {
      element.classList.toggle(this.#classForChange);
      if (!this.#bodyClass) return;
      this.#body.classList.toggle(this.#bodyClass);
    }
  };

  constructor ({ button, changeNode, classForChange, bodyClass = null }) {
    this.#button = document.querySelectorAll(`[${button}]`);
    this.#changeNode = document.querySelectorAll(`[${changeNode}]`);
    this.#classForChange = classForChange;
    this.#body = document.querySelector('body');
    this.#bodyClass = bodyClass;
  }

  addLisener (event) {
    for (const element of this.#button) {
      element.addEventListener(event, this.#addClass);
    }
  }

  removeLisener (event) {
    for (const element of this.#button) {
      element.removeEventListener(event, this.#addClass);
    }
  }

  get changeNode () {
    return this.#changeNode;
  }

  get button () {
    return this.#button;
  }

  get classForChange () {
    return this.#classForChange;
  }

  get addClass () {
    return this.#addClass;
  }
}
