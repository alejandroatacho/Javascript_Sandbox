// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let myHTML = document.querySelector('html');
// myHTML.addEventListener('click', function () {
//   alert('Ouch! Stop poking me!');
// });

let iceCream = 'chocolate';
let myHTML = document.querySelector('html');
if (iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');
    const myHeading = document.querySelector('h1');
    myHeading.textContent = "I love chocolate ice cream!";
    myHTML.addEventListener('click', function () {
      alert('Ouch! Stop poking me!');
    });
}
else {
  alert('Awwww, but chocolate is my favorite…');
}