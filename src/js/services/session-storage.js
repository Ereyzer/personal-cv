export class SessionStorage {
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
    const value = window.sessionStorage.getItem(this.#propertyName);
    this.#propertyValue = !value ? value : JSON.parse(value);
  }

  setItem () {
    window.sessionStorage.setItem(
      this.#propertyName,
      JSON.stringify(this.#propertyValue)
    );
  }

  removeItem () {
    window.sessionStorage.removeItem(this.#propertyName);
  }
}
