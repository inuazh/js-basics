// Promise · async/await · try/catch · Promise.all
// логика · Своя функция delay и очередь запросов
// 1) Напишите функцию delay(ms), которая возвращает промис, разрешающийся через ms
// миллисекунд. 2) Используя её, напишите функцию runSequentially(tasks) — массив
// async-функций, которые должны выполняться по очереди (следующая начинается
// только после завершения предыдущей). Выведите время начала и конца каждой

const delay = (ms) =>{
    return new Promise(resolve => setTimeout(resolve,ms))
}

runSequentially(tasks) = async () =>{
    await 
}