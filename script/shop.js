const shop = {
  beer: {
    count: 120,
    price: 40,
  },
  pepsi: {
    count: 200,
    price: 30,
  },
  chips: {
    count: 175,
    price: 25,
  },
  bank: 1000,
};

let basket = [];

const addBasket = (product) => {
  shop[product.name].count -= product.count;
  basket.push(product);
};

const checkCount = (product) => {
  if (shop[product.name].count < product.count) {
    return false;
  } else {
    addBasket(product);
    return true;
  }
};

const sell = () => {
  basket.forEach((element) => {
    shop.bank += shop[element.name].price * element.count;
  });

  basket = [];
};

const showCount = (name) => `${shop[name].count} psc`;

const showBank = () => `${shop.bank} grn`;

export { sell, checkCount, showCount, showBank };
