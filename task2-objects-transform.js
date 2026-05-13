// логика · Трансформация объекта через Object.entries
// Напишите функцию transformPrices(prices, discount), которая принимает объект с ценами
// и процент скидки, возвращает новый объект с ценами со скидкой. Округляйте до
// целого.
const prices = { apple: 120, banana: 80, cherry: 350, mango: 290 };

const transformPrices = (prices, discount) => {
    return Object.fromEntries(  Object.entries(prices).map(([key, value]) => [
        key, 
        Math.round( value*(1-discount/100))
    ])
 );
}

console.log(transformPrices(prices, 10))
// → { apple: 108, banana: 72, cherry: 315, mango: 261 }