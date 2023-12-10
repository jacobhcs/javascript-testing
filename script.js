var block = document.querySelector('#removethis');
var image = document.querySelector('#photo');
var select = document.querySelector('#menu');
var degree = document.querySelectorAll('.degree')
var tempSelect = document.querySelector('#measurements')



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
  var fahrenheitTemp = ['70','90'];
  if (tempSelect.value == 'C') {
    for (var i = 0; i < degree.length; i++) {
      fahrenheitTemp.push(degree[i].innerText);
      degree[i].innerText = Math.floor((degree[i].innerText - 32) * 5 / 9);
      console.log(degree[i].innerText);
    }
  } else if (tempSelect.value == 'F') {
    for (var x = 0; x < degree.length; x++) {
      degree[x].innerText = fahrenheitTemp[x];
      console.log(degree[x].innerText);
    }
  }
}