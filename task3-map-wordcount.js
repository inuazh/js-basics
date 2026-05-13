// логика · Подсчёт частоты слов
// Используя Map, напишите функцию wordCount(text), которая возвращает Map с
// количеством вхождений каждого слова. Регистр не важен («Hello» и «hello» — одно
// слово). Затем найдите самое частое слово.
const text = "the quick brown fox jumps over the lazy dog the fox";

const wordCount = (str) => {
  const arr = str.toLowerCase().split(" ");
  const map = new Map();

  arr.forEach((word) => {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  });

  const mostFrequent = () => {
    return [...map.entries()].reduce((max, [word, count]) =>
      count > max[1] ? [word, count] : max,
    );
  };

  const resultMostFrequent = mostFrequent()

  return {map, resultMostFrequent};
};

console.log(wordCount(text));