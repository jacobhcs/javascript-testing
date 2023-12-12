var block = document.querySelector('#removethis');

// when button is clicked the box will be romved.
function removeBlock() {
  block.remove();
}

// will change box to blue when hovering over.
function over(element) {
  element.style.backgroundColor = 'blue';
}

// will change style of box backgroundColor to red when cursor is outside of box.
function out(element) {
  element.style.backgroundColor = 'red';
}

// will change the box backgroundColor to green when box is clicked
function clickMe(element) {
  element.style.backgroundColor = 'green';
}

// will change box backgroundColor to black when click is released
function releaseMe(element) {
  element.style.backgroundColor = 'black';
}

// grabbing the select and img element with the id name #menu and #photo from html to reference in the function.
var image = document.querySelector('#photo');
var select = document.querySelector('#menu')

// this function changes the photo (img src) being displayed on the screen when you <select> a new value.
function imageChange() {
  image.src = select.value;
}

// grabbing all paragraph element with the class of .degree to use in function changeMeasure.
var degree = document.querySelectorAll('.degree');
// grabbing the select element that changes the temperature measurements.
var tempSelect = document.querySelector('#measurements');

// this function changes the values of all the temperature measurements on the weather cards.
function changeMeasure() {
  var fahrenheitTemp = ['70', '90'];
  if (tempSelect.value == 'C') {
    for (var i = 0; i < degree.length; i++) {
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

// referencing the input and button elements to include in the function alertValue().
var searchbutton = document.querySelector('.searchbutton');
var searchbar = document.querySelector('#searchbar');

// this function will prompt an alert message the will be the value of the text written inside the searchbar.
function alertValue() {
  alert(`Searching for "${searchbar.value}"`)  
}

// this will remove the button that is being clicked using the 'this' keyword in html argument.
function removeButton(element) {
  element.remove()
}

// this is grabbing the p.counter element from the element to modify its inner text value.
var counterstart = document.querySelector('.counter')

// this will be our counter that increases or decreases by 1 and will be used to change the inner text of the counterstart variable.
var count = 0;

// this function will INCREASE the count of the counter by 1.
function countUp(){
  count++;
  counterstart.innerText = count;
}

// this function will LOWER the count of the counter by 1.
function countDown(){
  count--;
  counterstart.innerText = count;
}