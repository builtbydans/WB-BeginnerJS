// Add Function
const add = (a, b = 3) => a + b;

// MakeABaby
const makeABaby = (first, last) => { 
  return { name: `${first} ${last}`, age: 0 }; 
};

// Method
const myObj = {
  name: 'Dan',
  age: 29,
  sayHi() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`)
  }
};

// Callback Function
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('You clicked me');
});