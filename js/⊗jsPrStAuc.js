const countries = [
  { name: "Австралия", code: "AU", flag: "https://flagcdn.com/w40/au.png" },
  { name: "Австрия", code: "AT", flag: "https://flagcdn.com/w40/at.png" },
  { name: "Азербайджан", code: "AZ", flag: "https://flagcdn.com/w40/az.png" },
  { name: "Албания", code: "AL", flag: "https://flagcdn.com/w40/al.png" },
  { name: "Алжир", code: "DZ", flag: "https://flagcdn.com/w40/dz.png" },
  { name: "Ангола", code: "AO", flag: "https://flagcdn.com/w40/ao.png" },
  { name: "Андорра", code: "AD", flag: "https://flagcdn.com/w40/ad.png" },
  { name: "Армения", code: "AM", flag: "https://flagcdn.com/w40/am.png" },
  { name: "Беларусь", code: "BY", flag: "https://flagcdn.com/w40/by.png" },
  { name: "Бельгия", code: "BE", flag: "https://flagcdn.com/w40/be.png" },
  { name: "Болгария", code: "BG", flag: "https://flagcdn.com/w40/bg.png" },
  { name: "Бразилия", code: "BR", flag: "https://flagcdn.com/w40/br.png" },
  {
    name: "Великобритания",
    code: "GB",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  { name: "Венгрия", code: "HU", flag: "https://flagcdn.com/w40/hu.png" },
  { name: "Венесуэла", code: "VE", flag: "https://flagcdn.com/w40/ve.png" },
  { name: "Вьетнам", code: "VN", flag: "https://flagcdn.com/w40/vn.png" },
  { name: "Германия", code: "DE", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Гонконг", code: "HK", flag: "https://flagcdn.com/w40/hk.png" },
  { name: "Греция", code: "GR", flag: "https://flagcdn.com/w40/gr.png" },
  { name: "Грузия", code: "GE", flag: "https://flagcdn.com/w40/ge.png" },
  { name: "Дания", code: "DK", flag: "https://flagcdn.com/w40/dk.png" },
  { name: "Доминикана", code: "DO", flag: "https://flagcdn.com/w40/do.png" },
  { name: "Египет", code: "EG", flag: "https://flagcdn.com/w40/eg.png" },
  { name: "Израиль", code: "IL", flag: "https://flagcdn.com/w40/il.png" },
  { name: "Индия", code: "IN", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Индонезия", code: "ID", flag: "https://flagcdn.com/w40/id.png" },
  { name: "Иордания", code: "JO", flag: "https://flagcdn.com/w40/jo.png" },
  { name: "Италия", code: "IT", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Казахстан", code: "KZ", flag: "https://flagcdn.com/w40/kz.png" },
  { name: "Канада", code: "CA", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "Кипр", code: "CY", flag: "https://flagcdn.com/w40/cy.png" },
  { name: "Китай", code: "CN", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "Колумбия", code: "CO", flag: "https://flagcdn.com/w40/co.png" },
  { name: "Куба", code: "CU", flag: "https://flagcdn.com/w40/cu.png" },
  { name: "Кыргызстан", code: "KG", flag: "https://flagcdn.com/w40/kg.png" },
  { name: "Латвия", code: "LV", flag: "https://flagcdn.com/w40/lv.png" },
  { name: "Ливия", code: "LY", flag: "https://flagcdn.com/w40/ly.png" },
  { name: "Литва", code: "LT", flag: "https://flagcdn.com/w40/lt.png" },
  { name: "Люксембург", code: "LU", flag: "https://flagcdn.com/w40/lu.png" },
  { name: "Малайзия", code: "MY", flag: "https://flagcdn.com/w40/my.png" },
  { name: "Мексика", code: "MX", flag: "https://flagcdn.com/w40/mx.png" },
  { name: "Молдавия", code: "MD", flag: "https://flagcdn.com/w40/md.png" },
  { name: "Монако", code: "MC", flag: "https://flagcdn.com/w40/mc.png" },
  { name: "Нигерия", code: "NG", flag: "https://flagcdn.com/w40/ng.png" },
  { name: "Нидерланды", code: "NL", flag: "https://flagcdn.com/w40/nl.png" },
  { name: "Норвегия", code: "NO", flag: "https://flagcdn.com/w40/no.png" },
  { name: "ОАЭ", code: "AE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Пакистан", code: "PK", flag: "https://flagcdn.com/w40/pk.png" },
  { name: "Россия", code: "RU", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "Руанда", code: "RW", flag: "https://flagcdn.com/w40/rw.png" },
  { name: "Румыния", code: "RO", flag: "https://flagcdn.com/w40/ro.png" },
  { name: "США", code: "US", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Украина", code: "UA", flag: "https://flagcdn.com/w40/ua.png" },
  { name: "Франция", code: "FR", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Эстония", code: "EE", flag: "https://flagcdn.com/w40/ee.png" },
  { name: "Япония", code: "JP", flag: "https://flagcdn.com/w40/jp.png" },
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
  let filteredCountries = countries.filter((country) =>
    country.name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
  );

  // Выделение совпаших символов

  // Вывод стран
  filteredCountries.forEach((country) => {
    const matchedText = country.name.substring(0, elem.value.length);
    const resText = country.name.substring(elem.value.length);

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
