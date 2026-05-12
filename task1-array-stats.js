// логика · Статистика по студентам
// Используя только методы массива, напишите функцию getStats(students), которая
// возвращает объект: средний балл, список отличников (≥90), список тех кто сдал (≥60),
// самый высокий балл.
// Страница 2

const students = [
{ name: "Алия", grade: 95 },
{ name: "Марат", grade: 72 },
{ name: "Дана", grade: 58 },
{ name: "Тимур", grade: 88 },
{ name: "Зара", grade: 91 },
];

const getStats = (arr) =>{
    const avg = arr.reduce((acc,n)=> acc+n.grade,0)/arr.length
    const above90 = arr.filter(n=> n.grade >= 90).map(n => n.name)
    const above60 = arr.filter((n)=> n.grade >= 60).map(n => n.name)
    const highestInTheRoom = Math.max(...arr.map(n=> n.grade))

    return {avg, above90, above60, highestInTheRoom}
}

const result = getStats(students)

console.log(result.avg)
console.log(result.above90)
console.log(result.above60)
console.log(result.highestInTheRoom)