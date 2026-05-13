// Promise · async/await · try/catch · Promise.all
// логика · Своя функция delay и очередь запросов
// 1) Напишите функцию delay(ms), которая возвращает промис, разрешающийся через ms
// миллисекунд. 2) Используя её, напишите функцию runSequentially(tasks) — массив
// async-функций, которые должны выполняться по очереди (следующая начинается
// только после завершения предыдущей). Выведите время начала и конца каждой




const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const task1 = async () => {
  const start = Date.now();
  await delay(500);
  console.log(`task 1 done in ${Date.now() - start}ms`);
};

const task2 = async () => {
  const start = Date.now();
  await delay(300);
  console.log(`task 2 done in ${Date.now() - start}ms`);
};

const task3 = async () => {
  const start = Date.now();
  await delay(700);
  console.log(`task 3 done in ${Date.now() - start}ms`);
};

const tasks = [task1, task2, task3];

runSequentially = async (tasks) => {
  for (const task of tasks) {
    await task();
  }
};



runSequentially(tasks)

module.exports = { delay }