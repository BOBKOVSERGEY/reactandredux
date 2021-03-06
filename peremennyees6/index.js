// объявление констант, константу нельзя переопределить
const pizza = true;


var topic = "Javascript";
if (topic) {
  // let ограничивает область видимости переменной любым блоком кода
  let topic = "React";
  console.log('block', topic);
}

console.log('block', topic);

var div,
    container = document.getElementById('container');

for (let i = 1; i < 6; i++) {
  div = document.createElement('div');
  div.onclick = function () {
    alert('This is box #' + i);
  };
  container.appendChild(div);
}


var lastName = "Ferrell";
let middleName = "William";
let firstName = "John";
console.log(`${lastName}, ${firstName}, ${middleName}`);

var article = {
  title: 'Название страницы',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis tortor ultrices, mattis mi vel, bibendum mauris. Donec vel lobortis elit, id porttitor nisi. In gravida urna ut orci convallis tempus. Maecenas luctus nisi suscipit blandit posuere. Donec consectetur tortor at congue auctor. Integer commodo risus risus. Ut ultrices lacinia eros fringilla auctor. Nam volutpat est enim, a aliquam dolor semper eget. Pellentesque mi lorem, convallis at ornare lacinia, rutrum laoreet lectus.'
};

document.body.innerHTML = `
<section>
  <header>
    <h1>The html 5 blog</h1>
  </header>
  <article>
    <h2>${article.title}</h2>
    ${article.body}
  </article>
  <footer>
    <p>Copiright ${new Date().getFullYear()} | The HTML 5 Blog</p>
  </footer>
</section>
`;

// в функцию можно передавать параметры установленные по умолчанию
function logActivityOne(name="Shane McConkey", activity="skiing") {
  console.log(`${name} loves ${activity}`);
}

logActivityOne();


var defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey"
  },
  favActivity: "skiing"
};

// в функцию можно передать даже целый объект
function logActivity(p = defaultPerson) {
  console.log(`${p.name.first} loves ${p.favActivity}`);
}

logActivity();


var lordifyOne = function (firstname) {
  return `${firstname} of Canterbury`;
};

console.log(lordifyOne("Dale"));
console.log(lordifyOne("Daryle"));


// стрелочная функция => указывает на то что должно быть вызвано

var lordify = firstname => `${firstname} of Next Canterbury`;
console.log(lordify("Dante"));

// старый синтаксис
var lordifyTwo = function (firstName, land) {
  return `${firstName} of ${land}`;
};

console.log(lordifyTwo("Tiabaldo", 'Spain'));

// новый синтаксис
var lordyfyThree = (firstName, land) => `${firstName} of ${land}`;
console.log(lordyfyThree("Dale", "Maryland"));
console.log(lordyfyThree("Daryle", "Culpeper"));

// если тело функции состоит боллее чем из одной строки, то ее следует
// заключать в фигурные скобки

// старый синтаксис
var lordifyFour = function (firstName, land) {

  if (!firstName) {
    throw new Error('A fistName is required to lordifyFour');
  }

  if (!land) {
    throw new Error('A lord must have a land');
  }

  return console.log(`${firstName} of ${land}`);

};

lordifyFour("Bob", "web");

// новый синтаксис
var lordifyFive = (firstName, land) => {
  if (!firstName) {
    throw new Error('A fistName is required to lordifyFive');
  }

  if (!land) {
    throw new Error('A lord must have a land');
  }

  return console.log(`${firstName} of ${land}`);
};

lordifyFour("Taran", "web");

// старый
var tahoe = {
  resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
  print: function (delay=1000) {
    setTimeout(function () {
      console.log(this.resorts.join(","));
    }, delay)
  }
};

//tahoe.print();

var tahoeTwo = {
  resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
  print: function (delay=3000) {
    setTimeout(() =>
      console.log(this.resorts.join(","))
    , delay)
  }
};

tahoeTwo.print();

var sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};
// область видимости для локального применения
var {bread, meat} = sandwich;

console.log(bread, meat);

var lordifySix = regularPersonTwo => {
  console.log(`${regularPersonTwo.firstName} of Conterbury`);
};

var regularPersonTwo = {
  firstName: "Bill",
  lastName: "Wilson"
};

lordifySix(regularPersonTwo);

var name = "Tallac";
var elavation = 9738;
var print = function() {
  console.log(`Mr. ${this.name} is ${this.elavation} feat tall`);
};

// создаем из переменных объект
var funHike = {name, elavation, print};

funHike.print();

/** Сравнение старого и нового синтаксиса: синтаксис обекта**/

// старый синтаксис
var skier = {
  name: name,
  sound: "sound",
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function(mph) {
    this.speed = mph;
    console.log('speed:', mph);
  }
};

/* новый синтаксис
const skierOne = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log('speed:', mph);
  }
};
*/

// Оператор распространения
var peaks = ["Tallac", "Ralston", "Rose"];
var canyons = ["Ward", "Blackwood"];

// объединяем содержимое массивов
var tahoe = [...peaks, ...canyons];

console.log(tahoe);
console.log(tahoe.join(', '));

var peaksOne = ["Tallac", "Ralston", "Rose"];

var [last] = peaksOne.reverse();

console.log(last);
// вывод массива в обратном порядке
console.log(peaksOne.join(', '));

var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];

var [first, ...rest] = lakes;

console.log(rest.join(', '));

function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();

  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`shopping ${stops.length}`);
};

directions(
  "Truckee",
  "Tahoe City",
  "Sunnyside",
  "Homewood",
  "Tahoma"
);

// объединение объектов
var morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};

var dinner = "mac and cheese";

var backpackingMeals = {
  ...morning,
  dinner
};

console.log(backpackingMeals);




