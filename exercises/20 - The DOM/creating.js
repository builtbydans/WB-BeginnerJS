const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a Paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

document.body.appendChild(myParagraph);