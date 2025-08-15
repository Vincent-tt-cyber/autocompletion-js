let arr = [
  "Австралия",
  "Австрия",
  "Азербайджан",
  "Албания",
  "Алжир",
  "Ангола",
  "Андорра",
  "Ангилья",
  "Андорра",
  "Ангилья",
  "Америка",
  "Эстония",
  "Россия",
  "Беларусь",
  "Бельгия",
  "Болгария",
  "Бразилия",
  "Великобритания",
  "Венгрия",
  "Венесуэла",
  "Вьетнам",
  "Германия",
  "Гонконг",
  "Греция",
  "Грузия",
  "Дания",
  "Доминикана",
  "Египет",
  "Израиль",
  "Индия",
  "Индонезия",
  "Иордания",
  "Италия",
  "Канада",
  "Китай",
  "Кипр",
  "Колумбия",
  "Куба",
  "Казахстан",
  "Кыргызстан",
  "Латвия",
  "Ливия",
  "Литва",
  "Люксембург",
  "Малайзия",
  "Мексика",
  "Молдавия",
  "Монако",
  "Нидерланды",
  "Нигерия",
  "Норвегия",
  "ОАЭ",
  "Пакистан",
  "Украина",
  "Армения",
  "Румыния",
  "Руанда",
];

const elem = document.querySelector("#elem");
const list = document.querySelector(".list");

elem.addEventListener("input", () => {
  // Очистка перед поиском
  list.innerHTML = "";

  // Значение
  let value = elem.value.trim();

  // Если поле пустое
  if (!value || value === "") {
    return;
  }

  // Филттр стран
  let filteredCountries = arr.filter((country) =>
    country.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
  );

  // Выделение совпаших символов

  // Вывод стран
  filteredCountries.forEach((country) => {
    const matchedText = country.substring(0, elem.value.length);
    const resText = country.substring(elem.value.length);

    // Создание элемента
    let li = document.createElement("li");
    li.innerHTML = `<span class="matched-text">${matchedText}</span>${resText}`;
    list.appendChild(li);

    // Обработка клика по элементу
    li.addEventListener("click", () => {
      elem.value = country;
      list.innerHTML = "";
    });
  });
});
