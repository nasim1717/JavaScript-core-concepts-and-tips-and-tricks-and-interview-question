let myWindow;
// select dom element
const width = document.getElementById('width');
const height = document.getElementById('height');

// show window object properties
width.innerHTML = "Window inner width: " + window.innerWidth;
height.innerHTML = "Window inner height: " + window.innerHeight;


function OpenWindow(){
 myWindow = window.open("https://www.google.com"); 
}

function closeWindow(){
    myWindow.close();
}



