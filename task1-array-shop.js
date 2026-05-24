// Методы массива
// map · filter · reduce · find · forEach · some · every
// логика · Обработка корзины интернет-магазина
// Есть массив товаров. Нужно: 1) получить только товары дороже 1000₽, 2) посчитать
// общую сумму скидочных товаров (isOnSale: true), 3) найти первый товар категории
// «электроника», 4) проверить, все ли товары есть в наличии (inStock).
// Каждый пункт — отдельная переменная. Не использовать циклы for/while — только
// методы массива

const products = [
  {
    id: 1,
    name: "Наушники",
    price: 2500, 
    category: "электроника",
    isOnSale: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Книга JS",
    price: 800,
    category: "книги",
    isOnSale: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Клавиатура",
    price: 3200,
    category: "электроника",
    isOnSale: true,
    inStock: false,
  },
  {
    id: 4,
    name: "Кружка",
    price: 450,
    category: "товары для дома",
    isOnSale: false,
    inStock: true,
  },
];


const cartFilter = (arr) =>{
    const filtered  = arr.filter((n) => n.price > 1000)
    const saleSum = arr.filter((n) => n.isOnSale === true).reduce((acc,n)=>acc+n.price,0 )
    const electroFilter = arr.find((n) => n.category === "электроника")
    const inStockCheck = arr.every(item => item.inStock)

    return {filtered, saleSum, electroFilter, inStockCheck}
}

const filter = cartFilter(products)
console.log('filtered:', filter.filtered)
console.log('saleSum:', filter.saleSum)
console.log('electroFilter:', filter.electroFilter)
console.log('inStockCheck:', filter.inStockCheck)