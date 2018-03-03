var frederick = {
  name: "Frederick Duglass",
  canRead: false,
  canWrite: false
};

console.log(frederick);

function selfEducate() {
  frederick.canRead = true;
  frederick.canWrite = true;

  return frederick;
}

selfEducate();

console.log(frederick);

console.log('--------------------------');

const frederickOne = {
  name: "Frederick Duglass",
  canRead: false,
  canWrite: false
};

console.log(frederickOne);

const selfEducationOne = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

selfEducationOne(frederickOne)

console.log(frederickOne);

console.log('------------Как нужно чистая функция--------------');

const frederickTwo = {
  name: "Frederick Duglass",
  canRead: false,
  canWrite: false
};

const selEducationTwo = person =>
  ({
    ...person,
    canRead: true,
    canWrite: true
  });
console.log(selEducationTwo(frederickTwo));
console.log(frederickTwo);

// функция с побочным эффектом вносящая изменения в dom
function Header(text) {
  let h1 = document.createElement('h1');
  h1.innerText = text;
  document.body.appendChild(h1);
}

Header("Header() caused side effects");

// чистая функция

const schools = [
  "Yourktown",
  "Washington & Lee",
  "Wakefield"
];

var elListSchools = document.getElementById('listSchools');
elListSchools.innerHTML = schools.join(', ');
console.log(schools.join(', '));
// старый синтаксис
var wSchool = schools.filter(function(schools) {
   return schools[0] === "W"
} );
console.log(wSchool);


// новый синтаксис
var wSchoolNew = schools.filter(schools => schools[0] === "W");

console.log(wSchoolNew);

// выводим массив кроме указанныхэлементов, не трогая сам массив

const cutSchool = (cut, list) =>
  list.filter(school => school !== cut);

console.log(cutSchool("Washington & Lee", schools).join(' * '));

console.log(schools.join("\n"));

// к каждой школе добавляем High School
const highSchool = schools.map(school => `${school} High School`);
console.log(highSchool.join('\n'));

console.log(schools.join('\n'));

const highSchools = schools.map(school => ({name:school}));

console.log(highSchools);

const ages = [
  21,
  18,
  42,
  40,
  64,
  63,
  64
];

const maxAge = ages.reduce((max, age)=> {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age
  } else {
    return max
  }
}, 0);

console.log('maxAge', maxAge);

const colors = [
  {
    id: '-xekare',
    title: 'rad red',
    rating: 3
  },
  {
    id: '-jbsoft',
    title: 'big blue',
    rating: 2
  },
  {
    id: '-prigbj',
    title: 'grizzly gray',
    rating: 5
  },
  {
    id: '-ruhbhs1',
    title: 'banana',
    rating: 1
  },
];

const hashColor = colors.reduce((hash, {id, title, rating}) => {
  hash[id] = {title,rating}
  return hash;
},
  {}
  );

console.log(hashColor);

const colorsTwo = [
  'red',
  'red',
  'green',
  'blue',
  'green'
];

const distinctColors = colorsTwo.reduce(
  (distinct, color) =>
    (distinct.indexOf(color) !== -1) ?
distinct : [...distinct, color], []);

console.log(distinctColors);

const invokeIf = (condition, fnTrue, fnFalse) =>
  (condition) ? fnTrue() : fnFalse();

const showWelcome = () =>
  console.log("Welcome!!!");


const showUnauthorized = () =>
  console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);





