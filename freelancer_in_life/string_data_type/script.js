// Строки в JavaScript
// Строки в JavaScript - это просто текст, заключенный в кавычки.
let str1 = 'Hello!';
let str2 = 'Hello, World!';
console.log(str1);
console.log(str2);

let str3 = `${str1} I am a string!`;
console.log(str3);

// Example 1
function f1(a, b) {
  return a + b;
}
console.log(`Sum: ${f1(2, 3)}`);

// Все что заключено в "будет являться строкой и иметь тем данных тип string"
let str4 = '158';
let str5 = 158;

console.log(typeof str4); // string
console.log(str4 + str5); // 158158

// Спецсимволы
// \n - перенос строки
let str6 = 'Hello World!\nI am a string!';
console.log(str6);

// \t - табуляция
let str7 = 'Hello World!\n\tI am a string!\n\t\tWith tabulation!';
console.log(str7);

// \\ - обратный слеш
let str8 = 'Hello World! \\ I am a string!';
console.log(str8);

// \' - Одинаковая кавычка
let str9 = "Hello World! 'I am a string!'";
console.log(str9);

// Работа со сроками
// Длина строки - свойство length возвращает длину строки
let str10 = 'Hello World!';
console.log(str10.length); // 12

// Получение символа по индексу
let str11 = 'Hello World!';
console.log(str11[0]); // H

let lastSymbol = str11.length - 1;
console.log(str11[lastSymbol]); // !

// Получаем каждый символ строки
let str12 = 'Hello World!';
for (let char of str12) {
  console.log(char);
} // H e l l o W o r l d !

// Методы строк
// Изменение регистра
let str13 = 'Hello World!';
console.log(str13.toUpperCase()); // HELLO WORLD!
console.log(str13.toLowerCase()); // hello world!

// Поиск подстроки в строке - метод indexOf возвращает индекс первого вхождения подстроки
let str14 = 'Hello World!';
console.log(str14.indexOf('World')); // 6
console.log(str14.indexOf('World', 7)); // -1

// Поиск подстроки в строке - метод includes возвращает true если подстрока найдена
let str15 = 'Hello World!';
console.log(str15.includes('World')); // true
console.log(str15.includes('World', 7)); // false

// Поиск подстроки в строке - метод startsWith и endsWith возвращает true если строка начинается или заканчивается на подстроку
console.log(str15.startsWith('Hello')); // true
console.log(str15.endsWith('World!')); // true

// Регистр имеет значения при поиске подстроки
let str16 = 'Hello World!';
console.log(str16.indexOf('world')); // -1
console.log(str16.toLowerCase().indexOf('world')); // 6
console.log(str16.toLowerCase().includes('world')); // true

// indexOf стоит использовать тогда когда нам нужна позиция найденной строки
// includes стоит использовать тогда когда нам нужно только знать есть ли такая строка

// Получение подстроки - метод slice возвращает подстроку
let str17 = 'Hello World!';
console.log(str17.slice(6)); // World! - с 6 символа до конца строки
console.log(str17.slice(6, 11)); // World - с 6 символа до 11 символа
console.log(str17.slice(-3, -1)); // ld - с 3 символа с конца до 1 символа с конца

// Сравнение строк
let str18 = 'Hello World!';
let str19 = 'Hello world!';
console.log(str18 === str19); // false

console.log('A' > 'B'); // false
console.log('A' < 'B'); // true
console.log('A' > 'a'); // false
console.log('A' < 'a'); // true
