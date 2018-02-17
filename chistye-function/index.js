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



