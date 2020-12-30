
counter=0
document.write("\n");
function print(text){
    counter+=1;
    var div = document.createElement("div");
    div.innerHTML = counter;
    div.style.backgroundColor = getRandomColor();
    
    document.body.appendChild(div);
    
    return text 
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var counterb = 0; counterb < 6; counterb++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }