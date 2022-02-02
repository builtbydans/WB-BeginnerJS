const heading = document.querySelector('h2');
heading.textContent = 'This is a new heading';
heading.insertAdjacentText('beforeend', ' 👀');

const findMain = document.querySelector('.main');

const makeRed = () => {
  findMain.classList.toggle('red');
}

