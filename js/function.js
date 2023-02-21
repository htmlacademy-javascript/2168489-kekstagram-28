//Функция №1
const NEW_STRING = 'aaaaaaaaaaaaaaaaaaaaaaaa';

const getStringLength = (newString, maxLength) => {
  if (newString.length >= maxLength) {
    return true;
  }
  return false;
};

getStringLength(NEW_STRING, 20);

//Функция №2
/*
const isPalindrome = (chekingWord) => {
  chekingWord = chekingWord.toLowerCase();
  return chekingWord === chekingWord.split('').reverse().join('');
};*/

const isPalidrome = (chekingWord) => {
  const tempWord = chekingWord.toLowerCase().replaceAll(' ', '');
  let reverseWord = '';
  for (let i = tempWord.length - 1; i >= 0; i--) {
    reverseWord += tempWord.at(i);
  }
  return tempWord === reverseWord;
};

isPalidrome('тОпот');
isPalidrome('Лёша на полке клопа нашёл');

//Функция №3
/*
const getOnlyNumbers = (phrase) => {
  phrase = phrase.replace(/[^0-9]/g,'');
  return phrase;
};*/

const getOnlyNumbers = (phrase) => {
  let result = '';
  for (let i = 0; i < phrase.length; i++) {
    if (!Number.isNaN(parseInt (phrase.at(i), 10))) {
      result += phrase.at(i);
    }
  }
  return parseInt(result, 10);
};

getOnlyNumbers('ECMAScript 2022');

//Функция №4
const makeNewString = (str, minLength, pad) => {
  let i = 0;
  let newSymbol = '';
  while (str.length + newSymbol.length <= minLength) {
    newSymbol += pad[i];
    i = i + 1 < pad.length ? i + 1 : 0;
  }
  return newSymbol + str;
};

makeNewString('q', 4, 'we');

const myPadStart = (str, minLength, pad) => {
  const actualPad = minLength - str.length;

  if (actualPad <= 0) {
    return str;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);
  return tempPad + tempRepeat + str;
};

myPadStart('qwerty', 4, '0');

