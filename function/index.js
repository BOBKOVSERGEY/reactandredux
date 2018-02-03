var log = function (message) {
  console.log(message);
};

log("in javascript function are variables");

// переписываем в стрелочную функцию
const logNew = message => console.log(message);
logNew("New in javascript function are variables");

// поскольку функции являются переменными их можно добавлять к объектам
const obj = {
  message: "They can be added to objects like variables",
  log(messages) {
    console.log(messages);
  }
};

obj.log(obj.message);


// функции в js можно также добавлять к массивам
const message = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  message => console.log(message)
];

message[1](message[0]);
message[3](message[2]);

// функции могут отправляться другим функциям в качестве аргументов
const insideFn = logger => logger("The can be sent to other functions as arguments");

insideFn(message => console.log(message));

// они так же как и переменные могут возвращаться из других функций

var createScream = function (logger) {
  return function (messages) {
    logger(messages.toUpperCase() + '!!!');
  }
};

const scream = createScream(message => console.log(message));

scream("functions can be returned from other functions");