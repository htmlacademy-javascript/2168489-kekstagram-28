import { SCALE_STEP, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './varibles.js';

const scaleSmallerElement = document.querySelector('.scale__control--smaller');
const scaleBiggerElement = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};


const handleSmallerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);

  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  scaleImage(newValue);
};

const handleBiggerButtonClick = function () {
  const currentValue = parseInt(scaleControlValue.value, 10);

  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  scaleImage(newValue);
};


const resetScale = () => scaleImage(DEFAULT_SCALE);
const setScale = () => scaleImage(DEFAULT_SCALE);

scaleSmallerElement.addEventListener('click', handleSmallerButtonClick);

scaleBiggerElement.addEventListener('click', handleBiggerButtonClick);

export {resetScale , setScale};

