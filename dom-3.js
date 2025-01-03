const btn = document.createElement('button');
btn.textContent = 'Click here';
btn.className = 'btn1';

const division = document.querySelector('div');
division.appendChild(btn);

const p = document.querySelector('p');
p.addEventListener('click', function () {
  clickPara("Hello");
});

function clickPara(name){
    console.log(name + 'Para Clicked');
} 

// document.querySelector('h2').remove();