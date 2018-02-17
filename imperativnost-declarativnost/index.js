// императивный подход
var string = "This is the midday show with Cheryl Waters";
var urlFriendly = "";

for (var i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly);

// декларативный подход
const stringOne = "This is the midday show with Cheryl Waters";
const urlFriendlyOne = string.replace(/ /g, "-");
console.log(urlFriendlyOne);

var target = document.getElementById('target');
var wrapper =document.createElement('div');
var headLine = document.createElement('h1');

wrapper.id = "welcome";
headLine.innerText = "Hello World";
wrapper.appendChild(headLine);
target.appendChild(wrapper);

// создаем объект

let colorLawn = {
  title: 'lawn',
  color: '#00ff00',
  rating: 0
}

// функция для изменения рейтинга цвета
var rateColor = function(color, rating) {
  return Object.assign({}, color, {rating:rating});
}

console.log(rateColor(colorLawn, 5).rating);
console.log(colorLawn.rating);

// функция в новом стандарте
const rateColorOne = (color, rating) =>
  ({
    ...color,
    rating
  });

// массив названий цветов

let list = [
  { title: "Rad Red" },
  { title: "Lawn" },
  { title: "Party Pink" },
];

// создадим функцию, клоторая будет добавлять цвета к массиву
var addColor = function (title, colors) {
  colors.push({title:title});
  return colors;
};
console.log(list.length);
const addColorOne = (title, array) => array.concat({title});
console.log(list.length);
console.log(addColorOne("Glam Green", list).length);


console.log(list.length);
// добавляем новый цвет в список
//console.log(addColor("Glam Green", list));




