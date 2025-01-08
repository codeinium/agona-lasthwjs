import { getProducts, getReviews, getUsers, getCompanies } from "./api.js"; // импорт

//массивы экземпляров объектов
let productsArray;
let reviewsArray;
let usersArray;
let companiesArray;

//получаем данные
await getProducts()
  .then(res => productsArray = res);
await getReviews()
  .then(res => reviewsArray = res);
await getUsers()
  .then(res => usersArray = res);
await getCompanies()
  .then(res => companiesArray = res);

export { productsArray, reviewsArray, usersArray, companiesArray }