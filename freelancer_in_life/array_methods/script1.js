// let arr = ['Sidor', 'Yuriy', 'Ivan', 'Petr', 'Yuriy'];
// let str = 'Sidor,Yuriy,Ivan,Petr';
// let arr1 = ['1Ivan', '2Petr', '3Sidor', '4Yuriy'];
let arr = [10, 2, 701, '14', 50, null, [], {}, undefined];
// let arr = [
//   { name: 'Vasya', age: 20 },
//   { name: 'Ivan', age: 30 },
//   { name: 'Petr', age: 25 },
//   { name: 'Sidor', age: 35 },
// ];

let newArr = [];

arr.forEach((item) => {
  if (typeof item != 'string') {
    return newArr.push(item);
  }
  return;
});

console.log(newArr);
