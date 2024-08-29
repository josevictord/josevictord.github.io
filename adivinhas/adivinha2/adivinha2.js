var clickCount = 0

function questionClicked(){
  clickCount = clickCount + 1;
  
  if( clickCount > 3 ){
    document.getElementById('answer').style.visibility='visible'
    clickCount = 0;
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 
