class User {
  #id;
  _name;

  constructor(id, name) {
    this.#id = id;
    this._name = name;
  }

  getName() {
    return this._name;
  }

  getId() {
    return this.#id
  }
}

export { User }