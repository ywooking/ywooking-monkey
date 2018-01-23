var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/mycat.jpeg') {
      myImage.setAttribute ('src','image/cat2.jpg');
    } else {
      myImage.setAttribute ('src','image/mycat.jpeg');
    }
}


// Personalized welcome message code


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}