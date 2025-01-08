class Company {
  #id;
  _name;
  _created;
  _country;

  constructor(id, name, created, country) {
    this.#id = id;
    this._name = name;
    this._created = created;
    this._country = country;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this._name;
  }

  getCreated() {
    return this._created;
  }

  getCountry() {
    return this._country;
  }

}


export { Company }