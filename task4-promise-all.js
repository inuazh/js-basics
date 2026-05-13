// логика · Promise.all vs последовательность
// Страница 4
// Напишите два варианта функции loadDashboard(): один загружает данные
// последовательно (пользователь → посты → комментарии), другой параллельно.
// Замерьте время выполнения обоих через Date.now(). Объясните в комментарии когда
// что использовать.
const getUser = () =>
  new Promise((res) => setTimeout(() => res({ name: "Алия" }), 500));
const getPosts = () =>
  new Promise((res) => setTimeout(() => res([1, 2, 3]), 700));
const getComments = () =>
  new Promise((res) => setTimeout(() => res(["ок", "круто"]), 400));

const loadDashboard = async () => {
  const start = Date.now();
  const user = await getUser();
  const posts = await getPosts();
  const comment = await getComments();

  console.log(`sequental: ${Date.now() - start}ms`);
  return { user, posts, comment };
};

loadDashboard();

const loadDashboard2 = async (item) => {
  const start = Date.now();
  const result = await Promise.all([getUser(), getPosts(), getComments()])

  console.log(`paralel: ${Date.now() - start}ms`);
};

loadDashboard2();
// node task4-promise-all.js paralel: 718ms sequental: 1621ms: 
// потому что последовательные запускаются друг за другом а 
// паралельные паралельно, как в эл цепях