// Напишите функцию mergeConfigs(defaults, userConfig), которая возвращает итоговый
// конфиг. Пользовательские настройки имеют приоритет. Дефолтные настройки должны
// остаться нетронутыми (убедитесь, что оригинал не мутирует).


const defaults = { theme: "light", lang: "ru", notifications: true, fontSize: 14 };
const userConfig = { theme: "dark", fontSize: 16 };
// После вызова:
// mergeConfigs(defaults, userConfig)
// → { theme: "dark", lang: "ru", notifications: true, fontSize: 16 }
// defaults — не изменился!


const mergeConfigs = (defaultsObj, userConfigObj) => {
   return  {...defaultsObj, ...userConfigObj}
}

console.log(mergeConfigs(defaults, userConfig))
// → { theme: "dark", lang: "ru", notifications: true, fontSize: 16 }