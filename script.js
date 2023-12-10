var block = document.querySelector('#removethis');
var image = document.querySelector('#photo');
var select = document.querySelector('#menu');
var degrees = document.querySelectorAll('.degree');
var tempSelect = document.querySelector('#measurements');
var fahrenheitTemps = Array.from(degrees).map(deg => deg.innerText);

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
var select = document.querySelector('#menu');

function imageChange() {
  image.src = select.value;
}

function changeMeasure() {
  if (tempSelect.value == 'C') {
    degrees.forEach((degree, index) => {
      degree.innerText = Math.floor((parseFloat(fahrenheitTemps[index]) - 32) * 5 / 9);
    });
  } else if (tempSelect.value == 'F') {
    degrees.forEach((degree, index) => {
      degree.innerText = fahrenheitTemps[index];
    });
  }
}
