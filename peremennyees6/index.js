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
