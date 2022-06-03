const removeId = document.getElementById('main'); 
removeId.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");

newHeader.textContent =("is the champion");