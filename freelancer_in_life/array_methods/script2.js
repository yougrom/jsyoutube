// Массивы это отдельный под вид объектов он позволяет нам хранить данные в виде списка.
// Массивы могут хранить в себе любые типы данных, включая другие массивы.
// Массивы в JavaScript могут быть созданы с помощью литерала массива или с помощью конструктора Array().
let arr = [];
let arr2 = new Array();
let arr3 = [
  '1',
  2,
  {
    name: 'Ivan',
    age: 30,
  },
  [1, 2, 3, 4],
  function () {
    console.log('Hello');
  },
];

// Многомерное массивы это массивы внутри массивов
let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr4[1][1]); // 5
console.log(arr3[2]); // { name: 'Ivan', age: 30 }
console.log(arr3); // [ '1', 2, { name: 'Ivan', age: 30 }, [ 1, 2, 3, 4 ], [Function] ]
console.log(arr3[2].name); // Ivan

// Вызов функции в массиве arr3 с помощью индекса 4 и круглых скобок arr3[4]();
arr3[4](); // Hello

// Массивы в JavaScript имеют свойство length, которое показывает количество элементов в массиве
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.length); // 5

// Массив является объектом И ведёт себя как объект например копируется по ссылке а не по значению

let arr6 = ['Ivan', 'Petr', 'Sidor'];
console.log('arr6: ' + arr6);
let arr7 = arr6;
arr7[0] = 'Vasya!!!';
console.log(arr6); // [ 'Vasya', 'Petr', 'Sidor' ]

//------------------------------------------------------

// Методы массивов
// Варианты применения для массивов в JavaScript
// Очередь - FIFO (First In First Out) - первый пришел, первый ушел - shift() и push() — Добавляйте элементов в конец очереди
// Стек - LIFO (Last In First Out) - последний пришел, первый ушел - push() и pop()

// Методы для работы с массивами
// Методы для добавления и удаления элементов
// push() - добавляет элемент в конец массива
let arr8 = ['Ivan', 'Petr', 'Sidor'];
arr8.push('Yura');
console.log(arr8); // [ 'Ivan', 'Petr', 'Sidor', 'Yura' ]
arr8.push('Vasya', 'Kolya'); // добавление нескольких элементов в конец массива через запятую в одной строке
console.log(arr8); // [ 'Ivan', 'Petr', 'Sidor', 'Yura', 'Vasya', 'Kolya' ]

// pop() - удаляет последний элемент из массива и возвращает его значение (удаляет элемент из конца массива)
arr8.pop();
console.log(arr8); // [ 'Ivan', 'Petr', 'Sidor', 'Yura', 'Vasya' ]

// unshift() - добавляет элемент в начало массива и возвращает новую длину массива
arr8.unshift('Kolya', 'Serega');
console.log(arr8); // [ 'Kolya', 'Serega', 'Ivan', 'Petr', 'Sidor', 'Yura', 'Vasya' ]

// shift() - удаляет первый элемент из массива и возвращает его значение (удаляет элемент из начала массива)
arr8.shift();
console.log(arr8); // [ 'Serega', 'Ivan', 'Petr', 'Sidor', 'Yura', 'Vasya' ]

// Методы Push() Pop() выполняются быстро, а методы Shift() Unshift() медленно
// При использовании методов Shift() Unshift() происходит переиндексация всех элементов массива
// Поэтому при большом количестве элементов в массиве лучше использовать методы Push() Pop()
// Методы Push() Pop() работают быстро, так как добавляют и удаляют элементы в конце массива

// Методы для работы с массивами
// Методы для добавления и удаления элементов
let arr9 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];

// -------------------------------------------------------------------

// splice() - добавляет или удаляет элементы в массиве и возвращает массив удаленных элементов (изменяет исходный массив)
// Syntax:
// splice(начальный индекс, количество элементов для удаления, элементы для добавления)
// Удаляем 2 элементa начиная с индекса 2
let arr10 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
console.log(arr10);
arr10.splice(2, 2);
console.log(arr10); // [ 'Aries', 'Taurus', 'Leo', 'Virgo' ]

// Удаляем элемент и возвращаем его в переменную
let arr11 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
let deleted = arr11.splice(2, 2);
console.log(deleted[1]); // Cancer

// Заменяем элементы в массиве
let arr12 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
arr12.splice(1, 2, 'XXX', 'YYY');
console.log(arr12);

// Добавляем элементы
let arr13 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
console.log(arr13);
arr13.splice(2, 0, 'UUU', 'KKK'); // 0 — Означает что мы что-то добавляем
console.log(arr13);

// Удаляем элементы
let arr14 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
console.log(arr14);
arr14.splice(-3, 3);
console.log(arr14);

// -------------------------------------------------------------------

// Метод slice();
// Создает новый массив В которой копируют часть Либо весь массив
// Syntax: arr.slice(start, end) - Не включая end

// Копируем часть с массива
let arr15 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
console.log(arr15);
// Начиная с первой позиции Leo
// До четвёртой позиции Cancer не включая
let arr16 = arr15.slice(0, 4);
console.log(arr16);

// Можно использовать отрицательное значение
let arr17 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
console.log(arr17);
let arr18 = arr17.slice(-5, -1);
console.log(arr18);

// Копируй весь массив
let arr19 = arr17.slice();
console.log(arr19);

// -------------------------------------------------------------------

// Метод concat(); - объединяет два массива в один новый массив
// Создает новый массив и добавляет в него элементы из других массивов
// Syntax: arr.concat(arr2, arr3, ...)
let arr20 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];
let arr23 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];

let arr21 = arr20.concat('XXX', 'YYY');
console.log(arr21);

let arr24 = arr20.concat(arr23);
console.log(arr24);

// -------------------------------------------------------------------

// Поиск в массиве  indexOf() / lastIndexOf() и includes()
/*
1. arr.indexOf(item, from) - ищет item, начиная с индекса from, и возвращает индекс, На котором был найден искомый элемент или -1
2. arr.lastIndexOf(item, from) - ищет item, начиная с индекса from, и возвращает индекс, На котором был найден искомый элемент или -1
3. arr.includes(item, from) - ищет item, начиная с индекса from, и возвращает true, если поиск успешен или false, если не найден
*/

let arr25 = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];

// indexOf() - ищет элемент в массиве и возвращает его индекс
console.log(arr25.indexOf('Gemini')); // 2
console.log(arr25.indexOf('Virgo')); // 5
console.log(arr25.indexOf('Libra')); // -1

// lastIndexOf() - ищет элемент в массиве и возвращает его индекс
console.log(arr25.lastIndexOf('Gemini')); // 2
console.log(arr25.lastIndexOf('Virgo')); // 5
console.log(arr25.lastIndexOf('Libra')); // -1

// includes() - ищет элемент в массиве и возвращает true или false
console.log(arr25.includes('Gemini')); // true
console.log(arr25.includes('Virgo')); // true
console.log(arr25.includes('Libra')); // false

// -------------------------------------------------------------------

// Поиск в массиве find() / findIndex()
/*
1. arr.find(function(item, index, array) {}) - ищет элемент в массиве и возвращает первое значение, которое удовлетворяет условию функции
2. arr.findIndex(function(item, index, array) {}) - ищет элемент в массиве и возвращает индекс первого значения, которое удовлетворяет условию функции
*/

let arr26 = [
  { name: 'Ivan', age: 30 },
  { name: 'Petr', age: 25 },
  { name: 'Sidor', age: 35 },
  { name: 'Vasya', age: 20 },
];
let result26 = arr26.find(function (item, index, array) {
  // console.log(item);
  // console.log(index);
  // console.log(array);
  return item.age === 35;
});
console.log(result26);
// or
let result27 = arr26.find((item) => item.age === 20);
console.log(result27);

// findIndex() - ищет элемент в массиве и возвращает его индекс
let result28 = arr26.findIndex((item) => item.age === 35);
console.log(result28);

// filter() - ищет Все элементы, на которых функция callback вернёт true
// Syntax: arr.filter(callback)
// Возвращает новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) вернет true
/*
1. arr.filter(function(item, index, array) {}) - ищет элемент в массиве и возвращает все значения, которые удовлетворяют условию функции
let result = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // если false - элемент не добавляется к результату
}
*/

let arr27 = [
  { name: 'Ivan', age: 30 },
  { name: 'Petr', age: 25 },
  { name: 'Sidor', age: 35 },
  { name: 'Vasya', age: 20 },
];
let result = arr27.filter(function (item) {
  return item.age > 25;
});
console.log(result);

// -------------------------------------------------------------------

// Методы сортировки массивов
// sort() - сортирует массив на месте и возвращает отсортированный массив (изменяет исходный массив)
// по возрастанию или по убыванию (по умолчанию сортирует по возрастанию) (по умолчанию сортирует как строки)

// Сортировка слов
let arr28 = ['Petr', 'Vasya', 'Ivan', 'Sidor'];
console.log(arr28.sort());

// Сортировка чисел
let arr29 = [1, 55, 34, 22, 4];
console.log(arr29.sort());

// По умолчанию элементы сортируются как строки
// Для строк применяется лексикографический порядок
console.log('2' > '14'); // true

// Для чисел сортировка по умолчанию как строки
// Для чисел нужно использовать функцию сравнения
let arr30 = [1, 55, 34, 22, 4];

// Функция сортировки по возрастанию
function compareNumeric(a, b) {
  console.log(`a: ${a}, b: ${b}`);
  // if (a > b) return 1;
  // if (a == b) return 0;
  // if (a < b) return -1;
  return a - b;
}
console.log(arr30.sort(compareNumeric));

console.log(arr30.sort((a, b) => a - b));

// Сортировка в обратном порядке (по убыванию) - b - a
console.log(arr30.sort((a, b) => b - a));

// reverse() - меняет порядок элементов в массиве на обратный (изменяет исходный массив)
let arr31 = ['Petr', 'Vasya', 'Ivan', 'Sidor'];
console.log(arr31.reverse());

// -------------------------------------------------------------------

// Методы преобразования массива
// map() - создает новый массив из результатов вызова функции для каждого элемента массива
// Если нам нужно перебрать массив и вернуть данные каждого элемента в новый массив
// Syntax: arr.map(callback) - возвращает новый массив
// callback - функция, которая будет вызвана для каждого элемента массива
// let result = arr.map(function(item, index, array) {
// возвращается новое значение вместо элемента
// });

let arr32 = ['Petr', 'Vasya', 'Ivan', 'Sidor'];
let result1 = arr32.map(function (item, index, array) {
  return item[0];
});
console.log(result1);

// Пример
let arr33 = [1, 2, 3, 4, 5];
let result2 = arr33.map(function (item) {
  return item * 2;
});
console.log(result2); // [ 2, 4, 6, 8, 10 ]

// Методы split() и join()

// split() - преобразует строку в массив по разделителю
// Syntax: str.split(separator, limit)
// separator - разделитель, по которому будет произведено разделение
// limit - ограничивает количество элементов в массиве

let str = 'Ivan,Petr,Vasya,Sidor';
let arr34 = str.split(',');
console.log(arr34);

// Можно ограничить количество объектов которые попадут в массив
let arr35 = str.split(',', 2);
console.log(arr35);

// join() - преобразует массив в строку с разделителем между элементами
// Syntax: arr.join(separator)

let arr36 = ['Ivan', 'Petr', 'Vasya', 'Sidor'];
let str2 = arr36.join(',');
console.log(str2); // Ivan,Petr,Vasya,Sidor

// Same effect — convert array to string with String() method (not recommended) — Нельзя использовать разделитель
let arr37 = ['Ivan', 'Petr', 'Vasya', 'Sidor'];
let str3 = String(arr37);
console.log(str3); // Ivan,Petr,Vasya,Sidor

// -------------------------------------------------------------------

// Массива не образуют отдельный тип данных они основаны на объектах
// Поэтому массивы можно использовать как объекты

let obj = {};
let arr0 = [];
console.log(typeof obj); // object
console.log(typeof arr0); // object

// Как узнать нам где массив а где нет?
if (Array.isArray(obj)) {
  console.log('Это массив');
} else {
  console.log('Это не массив');
}

// -------------------------------------------------------------------

// Перебор элементов массива

// Цикл for - перебирает элементы массива по индексу (работает с объектами)
// Можно использовать для получения и значение и ключa - работает быстрее чем for...of
// Значение это элемент массива, ключ это индекс элемента
// Syntax: for (let i = 0; i < arr.length; i++) {}

let arr38 = ['Ivan', 'Petr', 'Vasya', 'Sidor'];
console.log(arr38.length); // 4
for (let i = 0; i < arr38.length; i++) {
  console.log(arr38[i]);
}

// Цикл for...of - перебирает элементы массива (не работает с объектами)
// Можно использовать для вывода значений массива
// Значение это элемент массива
// Syntax: for (let item of arr) {}

let arr39 = ['Arina', 'Lena', 'Vika', 'Sveta'];
for (let arrItem of arr39) {
  console.log(arrItem);
}

// Метод перебора forEach() - перебирает элементы массива
// Можно использовать для вывода значений массива
// Значение это элемент массива
// Syntax: arr.forEach(function(item, index, array) {})
//

let arr40 = ['Arina', 'Lena', 'Vika', 'Sveta'];
arr40.forEach(function (item, index, array) {
  console.log(`${item} Находится на ${index} Позиции в ${array}`);
});

// same with =>

arr40.forEach((item, index, array) => {
  console.log(`${item} Находится на ${index} Позиции в ${array}`);
});

// При использовании метода forEach() мы можем указывать в скобках имя отдельные функции

let arr41 = ['Ivan', 'Petr', 'Vasya', 'Sidor'];

arr41.forEach(show);

function show(item) {
  console.log(item);
}
// -------------------------------------------------------------------

// Методы reduce() и reduceRight()
// Методы arr.reduce() и arr.reduceRight() используются для вычисления какого-нибудь единого значения на основе всего массива

// reduce() - используется для вычисления единственного значения на основе всего массива

// Syntax: arr.reduce(function(accumulator, item, index, array) {}, initialValue)
// accumulator - накопитель, аккумулирующий результат (накапливает результат всех вызовов функции) (может быть любым) —
// Принимает результат предыдущего вызова функции или initialValue
// item - текущий элемент массива
// index - индекс текущего элемента массива
// array - массив, по которому осуществляется проход
// initialValue - начальное значение аккумулятора

// Функция применяется по очереди ко всем элементам массива и переносит свой результат на следующий вызов

let arrOne = [1, 2, 3, 4, 5];
let reduceValue = arrOne.reduce(function (accumulator, item, index, array) {
  return accumulator + item;
}, 0); // начальное значение аккумулятора 0 (может быть любым)
console.log(reduceValue);

/**
 * шаг один:
 * accumulator = 0
 * item = 1
 * accumulator + item = 0 + 1 = 1
 *
 * шаг два:
 * accumulator = 1
 * item = 2
 * accumulator + item = 1 + 2 = 3
 *
 * шаг три:
 * accumulator = 3
 * item = 3
 * accumulator + item = 3 + 3 = 6
 *
 * шаг четыре:
 * accumulator = 6
 * item = 4
 * accumulator + item = 6 + 4 = 10
 *
 * шаг пять:
 * accumulator = 10
 * item = 5
 * accumulator + item = 10 + 5 = 15
 */

// Example 2
// Если мы совсем не укажем начальное значение аккумулятора, то оно будет равно первому элементу массива (accumulator = Ivan)
// А работа метода начнется со второго элемента массива (Petr)

const names = ['Ivan', 'Petr', 'Sidor'];
const reduceValue2 = names.reduce(function (accumulator, item, index, array) {
  console.log(accumulator);
  console.log(item);
  return `${item}, ${accumulator}`;
});
console.log(`пользователи: ${reduceValue2}`);

// GPT Examples
let value = arr41.reduce(function (accumulator, item, index, array) {
  return accumulator + ' ' + item;
}, 2); // начальное значение аккумулятора 0 (может быть любым)
console.log(value);

// Пример 1: Суммирование элементов массива
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, item) => acc + item, 0);
console.log(sum);

// Пример 2: Конкатенация строк
const words = ['Hello', 'world', '!'];
const sentence = words.reduce((acc, item) => `${acc} ${item}`, ''); // начальное значение аккумулятора пустая строка
console.log(sentence); // Hello world !

// Пример 3: Подсчёт количества уникальных элементов в массиве
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); // начальное значение аккумулятора пустой объект
console.log(fruitCount); // { apple: 3, banana: 2, orange: 1 }

// reduceRight() - используется для вычисления единственного значения на основе всего массива, но проходит по массиву справа налево
// Syntax: arr.reduceRight(function(accumulator, item, index, array) {}, initialValue)
// accumulator - накопитель, аккумулирующий результат (накапливает результат всех вызовов функции) (может быть любым) — Принимает результат предыдущего вызова функции или initialValue
// item - текущий элемент массива
// index - индекс текущего элемента массива
// array - массив, по которому осуществляется проход
// initialValue - начальное значение аккумулятора

//-------------------------------------------------------------------

// Как правильно использовать массивы
// Массивы в JavaScript это объекты, которые хранятся в памяти как объекты
// Поэтому при работе с массивами нужно учитывать особенности работы с объектами
// При копировании массива он копируется по ссылке, а не по значению
// При изменении массива он изменяется везде, где он используется
let arr42 = ['Ivan', 'Petr', 'Vasya'];
console.log(typeof arr42); // object

// Добавление не числового свойства в массив (не рекомендуется)
arr42.name = 'Sidor'; // добавление свойства в массив
console.log(arr42); // [ 'Ivan', 'Petr', 'Vasya', name: 'Sidor' ] - свойство добавлено в массив

// Движок джаваскрипт хранит элементы массива в непрерывной области памяти один за другим
// Поэтому при удалении элемента массива, остальные элементы сдвигаются на его место

// Варианты неправильного применения массива:
// 1. Добавление не числового свойства в массив
// 2. Добавление элементов в массив вне его диапазона
// 3. Удаление элементов массива вручную
// 4. Изменение длины массива вручную
// 5. Изменение порядка элементов массива

//========================================================================================================================================================
//========================================================================================================================================================

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/
/*
// Задача №1.
// Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иштван', 'Оля',];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
*/
// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
/*
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];

// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';

// Задача №5.
// Чему равен previousValue в начале работы метода?
let arr = [9, 2, 8,];
let reduceValue = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// Задача №1.
// Какое число (длинну) мы получим?
let arr01 = ['Ваня', 'Иштван', 'Оля'];
let newArr = arr01;
newArr.push('Петя');
console.log(arr01.length); // 4

// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
