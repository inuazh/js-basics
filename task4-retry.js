// Напишите функцию withRetry(fn, retries, delayMs), которая вызывает async-функцию fn.
// Если она выбрасывает ошибку — повторяет попытку через delayMs миллисекунд, но не
// более retries раз. Если все попытки провалились — выбрасывает последнюю ошибку.

const {delay} = require('./task4-delay')
let attempts = 0;
const unreliable = async () => {
  attempts++;
  if (attempts < 3) throw new Error(`Попытка ${attempts} провалилась`);
  return "Успех!";
};
// withRetry(unreliable, 5, 200) → "Успех!" (с 3-й попытки)



const withRetry = async (fn, retries, delayMs) => {
    let lastErr = 'err'

  for (let i = 0; i < retries; i++) {
    try {
     return await fn();
    } catch(err) {
        lastErr = err
       delay(delayMs)    
    } 
  } throw lastErr
    
};

withRetry(unreliable, 5, 200).then(console.log).catch(console.error);
