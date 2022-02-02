 const link = document.querySelector('a');
 
 const handleClick = event => {
   const confirmPage = confirm(`Do you wish to proceed to ${link.innerHTML}.com?`)
   
   if (!confirmPage) {
     event.preventDefault();
     alert('Thanks for staying with us.');
   }
 }

 link.addEventListener('click', handleClick);