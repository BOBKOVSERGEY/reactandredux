var elTime = document.getElementById('time');
setInterval((elTime.innerHTML = getClockTime()), 1000);
// императивное решение
setInterval(logClockTime, 1000);

function logClockTime() {
  // получение строки показания часов в гражданском формате
  var time = getClockTime();

  // очистка показаний консоли и вывод показаний часов
  console.clear();
  console.log(time);
}

function getClockTime() {
  // получение текущего времени
  var date = new Date();
  var time = '';

  // выстраивание последовательности показания часов
  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM'
  }

  // преобразование показания времени в гражданский формат
  if (time.hours == 12) {
    time.ampm = 'PM';
  } else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours -= 12;
  }

  // подстановка 0 к показанию часов, что бы получилась пара цифр
  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  }
  // подстановка 0 к показанию минут, что бы получилась пара цифр
  if (time.minutes < 10) {
    time.minutes = '0' + time.minutes;
  }
  // подстановка 0 к показанию секунд, что бы получилась пара цифр
  if (time.seconds < 10) {
    time.seconds = '0' + time.seconds;
  }

  // придание показаниям часов формата строки
  return time.hours + ":"
  + time.minutes + ":"
  + time.seconds + " "
  + time.ampm;
}

console.log('-------функциональный подход------');

const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => elTime.innerHTML = message;

const abstractClockTime = date =>
  ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  })

const civilianHours = clockTime =>
  ({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
      clockTime.hours - 12 :
      clockTime.hours
  })

const appendAMPM = clockTime =>
  ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
  })

const display = target => time => target(time)

const formatClock = format =>
  time =>
    format.replace("hh", time.hours)
      .replace("mm", time.minutes)
      .replace("ss", time.seconds)
      .replace("tt", time.ampm)

const prependZero = key => clockTime =>
  ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
      "0" + clockTime[key] :
      clockTime[key]
  })

const compose = (...fns) =>
  (arg) =>
    fns.reduce(
      (composed, f) => f(composed),
      arg
    )

const convertToCivilianTime = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime)

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
  )(civilianTime)

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      abstractClockTime,
      convertToCivilianTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  )

startTicking()