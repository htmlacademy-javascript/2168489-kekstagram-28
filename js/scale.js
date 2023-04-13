import { SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './varibles.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  image.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const handleSmallerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);

  const newValue = currentValue <= MIN_SCALE ? MIN_SCALE : currentValue - SCALE_STEP;

  scaleImage(newValue);
};

const handleBiggerButtonClick = function () {
  const currentValue = parseInt(scaleControlValue.value, 10);

  const newValue = currentValue <= MAX_SCALE ? MAX_SCALE : currentValue - SCALE_STEP;

  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);
const setScale = () => scaleImage(DEFAULT_SCALE);

scaleSmaller.addEventListener('click', handleSmallerButtonClick);

scaleBigger.addEventListener('click', handleBiggerButtonClick);

export {resetScale , setScale};
