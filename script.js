var block = document.querySelector('#removethis');
var image = document.querySelector('#photo');
var select = document.querySelector('#menu');
var degree = document.querySelector('.degree')
var tempSelect = document.querySelector('#measurements')
var fahrenheitTemp = degree.innerText;


function removeBlock() {
  block.remove();
}

function over(element) {
  element.style.backgroundColor = 'blue';
}

function out(element) {
  element.style.backgroundColor = 'red';
}

function clickMe(element) {
  element.style.backgroundColor = 'green';
}

function releaseMe(element) {
  element.style.backgroundColor = 'black';
}

var image = document.querySelector('#photo');
var select = document.querySelector('#menu')

function imageChange() {
  image.src = select.value;
}

function changeMeasure() {
  if (tempSelect.value == 'C') {
    degree.innerText = Math.floor((degree.innerText - 32) * 5 / 9);
  } else if (tempSelect.value == 'F') {
    degree.innerText = fahrenheitTemp;
  }
  console.log(degree.innerText);
}