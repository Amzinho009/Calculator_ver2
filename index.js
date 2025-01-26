const display = document.getElementById('display');

function addToDisplay(input){
  display.value += input;
}

function allClear(){
  display.value = '';
}

function deleteOne(){
  display.value = display.value.slice(0,-1);
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = 'error'
  }
}

function toggleBodyColor() {
  const popup = document.getElementById('popup');
  popup.classList.remove('hidden');
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}

function applyGradient() {
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
  closePopup();
}
