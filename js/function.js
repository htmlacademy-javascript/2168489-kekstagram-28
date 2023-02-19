//Функция №1
const NEW_STRING = 'aaaaaaaaaaaaaaaaaaaaaaaa';

const getStringLength = (newString, maxLength) => {
  if (newString.length > maxLength) {
    return true;
  }
  return false;
};

getStringLength(NEW_STRING, 20);

//Функция №2
const isPalindrome = (chekingWord) => {
  chekingWord = chekingWord.toLowerCase();
  return chekingWord === chekingWord.split('').reverse().join('');
};

isPalindrome('тОпот');

//Функция №3
const getOnlyNumbers = (phrase) => {
  phrase = phrase.replace(/[^0-9]/g,'');
  return phrase;
};

getOnlyNumbers('ECMAScript 2022');

//Функция №4
const makeNewString = (str, minLength, addSymbol) => {
  let i = 0;
  let newSymbol = '';
  while (str.length + newSymbol.length <= minLength) {
    newSymbol += addSymbol[i];
    i = i + 1 < addSymbol.length ? i + 1 : 0;
  }
  return newSymbol + str;
};

makeNewString('q', 4, 'we');
