
function updateDisplayText() {

    const inputText = document.getElementById('textInput').value;
  
   
    const displayText = document.getElementById('displayText');
    
  
    displayText.textContent = inputText;
  }
  

  const textInput = document.getElementById('textInput');
  textInput.addEventListener('input', updateDisplayText);
  