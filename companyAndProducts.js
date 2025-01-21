import { getProducts, getReviews, getUsers, getCompanies } from "./api.js"; // импорт
import { Company } from "./classes/Company.js";
import { Review } from "./classes/Review.js";
import { User } from "./classes/User.js";
import { Product } from "./classes/Product.js";
import { productsArray, reviewsArray, usersArray, companiesArray } from "./requests.js"

/** 
 * Заимпортите функции из файла api.js, DONE
 * Получите данные по компаниям, товарам, пользователям и отзывам 
 * Создайте классы для товаров, компаний, отзывов и пользователей (в папке classes)
 * Создайте массивы экземпляров объектов
 * Соберите 4 массива в один массив данных так:
    * Каждая компания должна содержать поле с массивом всех производимых продуктов.
    * Каждый продукт должен содждержать полную информацию о себе, включая ревью.
    * Каждое ревью должно содержать информацию о полдьхователе, котороый это ревью оставил.
 *  */

// маплю, создаю объекты классов
const users = usersArray.map(user => new User(user.id, user.name));
const reviews = reviewsArray.map(review => new Review(review.id, review.userId, review.text));
const companies = companiesArray.map(company => new Company(company.id, company.name, company.created, company.country));
const products = productsArray.map(product => new Product(product.id, product.companyId, product.reviewIds, product.name, product.description));

// вспомогательные мапы
const usersMap = users.reduce((acc, user) => {
   acc[user.getId()] = user;
   return acc;
}, {});

const reviewsMap = reviews.reduce((acc, review) => {
   acc[review.getId()] = review;
   return acc;
}, {});

const companiesMap = companies.reduce((acc, company) => {
   acc[company.getId()] = company;
   return acc;
}, {});

const productsMap = products.reduce((acc, product) => {
   acc[product.getId()] = product;
   return acc;
}, {});

// общий массив
const overallArray = companies.map(company => {
   const companyProducts = products.filter(product => product.getCompanyId() === company.getId());

   const productsAndReviews = companyProducts.map(product => {
      const productReviews = product.getReviewIds().map(reviewId => {
         const review = reviewsMap[reviewId];
         const user = usersMap[review.getUserId()];
         return {
            ...review,
            user: user ? user.getName() : "no user"
         };
      });

      return {
         ...product,
         reviews: productReviews
      };
   });

   return {
      ...company,
      products: productsAndReviews
   };
});
