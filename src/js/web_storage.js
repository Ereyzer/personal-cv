export class WebStorage {
  #propertyName;
  #propertyValue;

  constructor ({ propertyName }) {
    this.#propertyName = propertyName;
    this.getItem();
  }

  get propertyValue () {
    return this.#propertyValue;
  }

  set propertyValue (newValue) {
    this.#propertyValue = newValue;
  }

  getItem () {
    this.#propertyValue = window.localStorage.getItem(this.#propertyName);
  }

  setItem () {
    window.localStorage.setItem(this.#propertyName, this.#propertyValue);
  }

  removeItem () {
    window.localStorage.removeItem(this.#propertyName);
  }
}
