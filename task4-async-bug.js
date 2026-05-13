// баг · Найди 3 ошибки в async-коде
// В коде ниже несколько проблем. Найди их, объясни каждую и исправь.

async function loadUserData(userId) {
  // await забыли
  const user = await fetch(`/api/users/${userId}`);
  const posts = await fetch(`/api/posts/${userId}`);
  // нарушена структура трай кетч
  try {
    const data = await user.json();
    // иф должен быть внутри трай
    if (!user.ok) {
      throw new Error("Не удалось загрузить");
    }
    return data;
  } catch (err) {
    console.log("Ошибка:", err);
  }
}
