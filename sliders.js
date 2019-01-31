
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
var rangeSlider1 = document.getElementById("rs-range-line1");
var rangeBullet1 = document.getElementById("rs-bullet1");
var rangeSlider2 = document.getElementById("rs-range-line2");
var rangeBullet2 = document.getElementById("rs-bullet2");
var rangeSlider3 = document.getElementById("rs-range-line3");
var rangeBullet3 = document.getElementById("rs-bullet3");
var rangeSlider4 = document.getElementById("rs-range-line4");
var rangeBullet4 = document.getElementById("rs-bullet4");


rangeSlider.addEventListener("input", showSliderValue, false);
rangeSlider1.addEventListener("input", showSliderValue1, false);
rangeSlider2.addEventListener("input", showSliderValue2, false);
rangeSlider3.addEventListener("input", showSliderValue3, false);
rangeSlider4.addEventListener("input", showSliderValue4, false);



function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}

function showSliderValue1() {
  rangeBullet1.innerHTML = rangeSlider1.value;
  var bulletPosition = (rangeSlider1.value /rangeSlider1.max);
  rangeBullet1.style.left = (bulletPosition * 578) + "px";
}

function showSliderValue2() {
  rangeBullet2.innerHTML = rangeSlider2.value;
  var bulletPosition = (rangeSlider2.value /rangeSlider2.max);
  rangeBullet2.style.left = (bulletPosition * 578) + "px";
}

function showSliderValue3() {
  rangeBullet3.innerHTML = rangeSlider3.value;
  var bulletPosition = (rangeSlider3.value /rangeSlider3.max);
  rangeBullet3.style.left = (bulletPosition * 578) + "px";
}

function showSliderValue4() {
  rangeBullet4.innerHTML = rangeSlider4.value;
  var bulletPosition = (rangeSlider4.value /rangeSlider4.max);
  rangeBullet4.style.left = (bulletPosition * 578) + "px";
}
