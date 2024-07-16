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
arr7[0] = 'Vasya';
console.log(arr6); // [ 'Vasya', 'Petr', 'Sidor' ]

// Методы массивов
// Варианты применения для массивов в JavaScript
// Очередь - FIFO (First In First Out) - первый пришел, первый ушел - shift() и push()
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
