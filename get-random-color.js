function getRandomColor(){
    return (Math.floor(Math.random() * (255 - 10)) + 10);
}

function getColor(){
  return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

(function changeColor(){
    setInterval((() => document.body.style.background = getColor()), 
        1000);
})()
