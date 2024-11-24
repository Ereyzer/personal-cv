export class Changer {
  #button;
  #changeNode;
  #classForChange;

  #addClass = () => {
    for (const element of this.#changeNode) {
      element.classList.toggle(this.#classForChange);
    }
  };

  constructor ({ button, changeNode, classForChange }) {
    this.#button = document.querySelectorAll(`[${button}]`);
    this.#changeNode = document.querySelectorAll(`[${changeNode}]`);
    this.#classForChange = classForChange;
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
