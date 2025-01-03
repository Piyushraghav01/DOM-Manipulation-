// const btn = document.createElement('button');
// btn.textContent = 'Click here';
// btn.className = 'btn1';

// const division = document.querySelector('div');
// division.appendChild(btn);

// //removing heading on the click of a button
// btn.addEventListener('click', () =>
//   document.querySelector('h2').remove()
// );

//Event Listener on Para
// const p = document.querySelector('p');
// p.addEventListener('mousedown', function () {
//   p.style.backgroundColor = 'yellow';
// });
// p.addEventListener('mouseup', function () {
//   p.style.backgroundColor = '';
// });
//keyboard Event
// document.body.addEventListener(
//   'keydown',
//   (event) => {
//     console.log('keyPressed');
//     console.log(event.keyCode);
//   }
// );

//Event Propogation

//Bubbling
document
  .querySelector('h3')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Heading 3 Clicked');
  });

document
  .getElementById('innerDiv')
  .addEventListener('click', () =>
    console.log('Inner Div Clicked'),true
  );

document
  .getElementsByTagName('div')[0]
  .addEventListener('click', () =>
    console.log('Outer div Clicked'),true
  );
document.body.addEventListener('click', () =>
  console.log('Body Clicked'),true
);
