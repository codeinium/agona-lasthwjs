class Review {
  #id;
  #userId;
  _text;

  constructor(id, userId, text) {
    this.#id = id;
    this.#userId = userId;
    this._text = text;
  }

  getId() {
    return this.#id;
  }

  getUserId() {
    return this.#userId;
  }

  getText() {
    return this._text;
  }
}

export { Review };