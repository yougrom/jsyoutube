// Функции это набор простых инструкций которые мы группируем Сохраняем и Вызываем когда нам нужно.

// Function Declaration — Объявление функции
// Функция можно вызвать до её создания
// Синтаксис
function name() {
  // body
};
// Параметры функции
function calculateNumber(initialValue) {
  let x = initialValue;
  x = x + 100;
  x = x / 5;
  
  return x;
}

const result = calculateNumber(5);
console.log(result);

// S circle = p * r2;
function calculateCircleAria(circleRadius) {
  return 3.14 * circleRadius ** 2;
};

const circleAria1 = calculateCircleAria(5);
console.log(circleAria1);

const circleAria2 = calculateCircleAria(20);
console.log(circleAria2);

// Параметры это переменная в круглой скобках функции
// Аргумент это значение переменной который мы передаем в функцию при вызове
// Функция может принимать сколько угодно параметров

// Функция которая Будет создавать HTML элемент и возвращает его
function createHTMLElement(tag, text, id) {
  const divElement = document.createElement(tag)
  if (id) {
    divElement.id = id;
  }
  divElement.id = id;
  divElement.innerText = text;

  return divElement;
};
// null - Мы можем специально передавать null Когда мы хотим специально пропустить параметр
const h1Element = createHTMLElement('h1', 'header1', 'just text');
const h1Element1 = createHTMLElement('h1', 'header2');
console.log(h1Element);
document.body.append(h1Element);
document.body.append(h1Element1);

// Ещё одно свойство функции это возможность Задавать значение параметрам по умолчанию
function createHTMLElementButton(button = 'button', text = 'send') {
  const element = document.createElement(button);
  element.textContent = text;
  return element;
};

const buttonElement = createHTMLElementButton();
document.body.append(buttonElement);


// Переменная arguments
// Создать функцию которая принимала внутри себя любое количество аргументов И все по очереди выводила бы в консоль

function logArgsToConsole() {
  //console.log(arguments);
  if (!arguments.length) {
    return;
  }
  for (let argument of arguments) {
    console.log(argument);
  }
  console.log('No arguments');
};
logArgsToConsole(1, 2, 4, 6);


// Function expression - Функциональное выражение
// Это создание переменной в которую мы помещаем Безымянную функцию
// Когда мы создаем функцию как Function expression То она работает как переменная то есть мы функцию не можем вызвать до создания функци
const sayHello = function() {
  console.log('Hello');
};
sayHello();

// Стрелочные функция
// Все стрелочные функции безымянные поэтому мы используем Function expression
const sayBay = () => {
  console.log('Bye');
}
sayBay();

// return В стрелочных функциях
// Если В теле стрелочные функции Одна строка return Можно не писать
const sayHi = () => 5;

// У стрелочной функции нет параметра arguments
// const sayHiArguments = () => {
//   console.log(arguments);
// };
// sayHiArguments(1, 3); // Uncaught ReferenceError: arguments is not defined

// Стрелочные функции не создают свой собственный контекст у них нет this Упрощает при создании методов объекта

// Example 1
// Создать функцию которая будет принимать в качестве параметра массив со ссылками. 
// Эта функция должна создавать новый массив, добавлять в неgо исправленные Ссылки и возвращать массив С правильными ссылками
const brokenLinks = ['twitter', 'youtube', 'facebook'];
// https://twitter.com

const fixLinksArray = (linksArray) => {
  const correctLinks =[];
  linksArray.forEach(function(brokenLink) { // Callback функция или обратный вызов эта функция переданная в другую функцию в качестве аргумента
    const fixedLink = 'https://' + brokenLink + '.com';
    correctLinks.push(fixedLink)
  });
  return correctLinks;
};
console.log(fixLinksArray(brokenLinks));

// Упростим Example 1
const brokenLinks1 = ['twitter', 'youtube', 'facebook'];
// https://twitter.com

const fixLinksArray1 = (linksArray) => {
  const correctLinks =[];
  linksArray.forEach((brokenLink) => correctLinks.push('https://' + brokenLink + '.com')
  );
  return correctLinks;
};
console.log(fixLinksArray1(brokenLinks1));
