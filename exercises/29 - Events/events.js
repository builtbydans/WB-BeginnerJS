const button = document.querySelector('.btn');
button.addEventListener('click', () => {
  console.log('You clicked me');
});

const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

const handleClick = (event) => {
  console.log('I\'ve been clicked');
  console.log(parseFloat(event.target.dataset.price));
}
 
buyButtons.forEach(btn => { 
  btn.addEventListener('click', handleClick)
});