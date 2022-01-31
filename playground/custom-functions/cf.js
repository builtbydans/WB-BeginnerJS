// Bill Calculation
const calculateBill = (billAmount, taxRate = 1.2) => {
  const total = billAmount * taxRate;
  return total;
}

const myTotal = calculateBill(100);
const displayTotal = `Your total is £${myTotal}.`;

// Greeting
const sayHi = (firstName = 'Mate') => `Hello ${firstName}`;
console.log(sayHi('Dan'));
console.log(sayHi());

// Doctorise
const doctorise = name => `Dr. ${name}`;
const yell = name => `HEY ${name.toUpperCase()}`;
console.log(yell(doctorise('Dan')));