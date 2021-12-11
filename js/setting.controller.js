'use strict';

const STORAGE_KEY = 'userSettingDB';

const init = () => {
  changeColors();
};

const showAge = (newVal) => {
  document.getElementById('sAge').innerHTML = newVal;
};

const changeColors = () => {
  let user = loadFromStorage(STORAGE_KEY);
  console.log(user);
  document.body.style.backgroundColor = user.bgColor;
  document.body.style.color = user.txtColor;
};

const onSubmit = (ev) => {
  ev.preventDefault();
  console.dir(ev.target);
  let arr = [];
  let els = Array.from(ev.target);
  console.log(els);
  els.forEach((el) => arr.push(el.value));
  console.log(arr);

  const user = {
    email: arr[0],
    age: arr[1],
    bgColor: arr[2],
    txtColor: arr[3],
    dateOfBirth: arr[4],
    timeOfBirth: arr[5],
  };
  saveToStorage(STORAGE_KEY, user);
  changeColors();
};
