import "./scss/styles.scss";

import { Catalog } from "./components/Models/Catalog.ts";
import { Buyer } from "./components/Models/Buyer.ts";
import { Cart } from "./components/Models/Cart.ts";
import { apiProducts } from "./utils/data.ts";

import { Api } from "./components/base/Api.ts";
import { WebApi } from "./components/WebApi.ts";
import { API_URL } from "./utils/constants.ts";

const productModel = new Catalog();
productModel.setProduct(apiProducts.items); //вызов setProduct проверен
console.log("Массив товаров из каталога: ", productModel.getProduct()); //вызов getProduct проверен
productModel.setSelectedProduct(apiProducts.items[0]); //вызов setSelectedProduct проверен
console.log("Выбранный товар: ", productModel.getSelectedProduct()); //вызов getSelectedProduct проверен
console.log(
  "Товар по ID: ",
  productModel.getProductById("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"),
); //вызов getProductById проверен

const cartModel = new Cart();
cartModel.setProductCart(apiProducts.items[2]); //вызов setProductCart проверен
cartModel.setProductCart(apiProducts.items[3]); //вызов setProductCart проверен
console.log("Корзина: ", cartModel.getProductCart()); //вызов getProductCart проверен
cartModel.delProductCart(apiProducts.items[2]);
console.log("Корзина после удаления: ", cartModel.getProductCart()); //вызов delProductCart
cartModel.clearCart();
console.log("Корзина после очистки: ", cartModel.getProductCart()); //вызов clearCart проверен
cartModel.setProductCart(apiProducts.items[0]);
cartModel.setProductCart(apiProducts.items[1]);
console.log("Общая стоимость: ", cartModel.getTotalPrice()); //вызов getTotalPrice проверен
console.log("Количество товаров: ", cartModel.getCountProduct()); //вызов getCountProduct проверен

const buyerModel = new Buyer();
buyerModel.setDataBuyer({
  payment: "card",
  email: "user@user.ru",
  phone: "555-80",
  address: "ул. Нефтяников, д. 1, кв. 10",
}); //вызов setDataBuyer проверен
console.log("Данные покупателя: ", buyerModel.getDataBuyer()); //вызов getDataBuyer проверен
buyerModel.clearDataBuyer();
console.log("Данные покупателя после очистки: ", buyerModel.getDataBuyer()); //вызов clearDataBuyer проверен
console.log("Проверка данных покупателя: ", buyerModel.checkDataBuyer()); //вызов checkDataBuyer проверен

const api = new Api(API_URL);
const webApi = new WebApi(api);

webApi
  .getProductList() //вызов getProductList проверен, данные с сервера пришли
  .then((productList) => {
    productModel.setProduct(productList.items);
    console.log("Список продуктов с сервера: ", productModel.getProduct());
  })
  .catch((error) => {
    console.error("Ошибка при получении списка продуктов: ", error);
  });
