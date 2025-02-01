// Функция, которая добавляет фрукт в список
function addFruit() {
   
    const fruitInput = document.getElementById('fruitInput');
    const fruitName = fruitInput.value.trim(); 
    
    if (fruitName !== "") {
     
      const newFruit = document.createElement('li');
      
   
      newFruit.textContent = fruitName;
      
 
      const fruitList = document.getElementById('fruitList');
      
     
      fruitList.appendChild(newFruit);
      
     
      fruitInput.value = '';
    } else {
      alert("Please enter a fruit name!");
    }
  }
  
 
  const addButton = document.getElementById('addFruitBtn');
  addButton.addEventListener('click', addFruit);
  