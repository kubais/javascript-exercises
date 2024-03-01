const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = `Hey I'm red!`;
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = `I'm a blue h3`;
container.appendChild(h3);

let div2 = document.createElement('div');
div2.textContent = 'div2';
container.appendChild(div2);

let h1 = document.querySelector('div2');
h1 = document.createElement('h1');
h1.textContent = `I'm a div`;

const para2 = document.createElement('p');
para2.textContent = 'ME TOO';

div2.append(h1, para2);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello world");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello world");
});

btn.addEventListener('click', function (e) {
    console.log(e);
}); //function (e) is a callback from addEventListener

// Using named functions

// METHOD 1
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  const btn3 = document.querySelector('#btn3')
  
  // METHOD 2
  btn3.onclick = alertFunction;
  
  // METHOD 3
  btn3.addEventListener('click', alertFunction);

  btn3.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn3.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});