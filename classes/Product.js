class Product {
  #id;
  #companyId;
  #reviewIds;  // = [];
  _name;
  _description;

  constructor(id, companyId, reviewIds, name, description) {
    this.#id = id;
    this.#companyId = companyId;
    this.#reviewIds = reviewIds ? reviewIds : [];
    this._name = name;
    this._description = description;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this._name;
  }

  getCompanyId() {
    return this.#companyId;
  }

  getDesctription() {
    return this._description;
  }

  getReviewIds() {
    return this.#reviewIds;
  }
}

export { Product }