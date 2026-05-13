// Используя Set: 1) удалите дубликаты из массива тегов, 2) найдите общие теги у двух
// статей, 3) найдите уникальные теги (которые есть только в одной из статей).


const article1Tags = ["js", "frontend", "react", "js", "hooks"];
const article2Tags = ["react", "typescript", "frontend", "vite"];

const article1TagsSet = new Set(article1Tags)
const article2TagsSet = new Set(article2Tags)

const crossArticle = [...article1TagsSet].filter(n => (article2TagsSet.has(n)));

const mergedSet = new Set([...article1TagsSet, ...article2TagsSet])

const difference = [...mergedSet].filter(n => !crossArticle.includes(n))

console.log(article1TagsSet,  article2TagsSet, crossArticle, difference)