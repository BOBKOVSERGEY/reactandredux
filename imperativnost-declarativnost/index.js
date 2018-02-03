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