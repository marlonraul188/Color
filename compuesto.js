let red = 0;
let green = 0;
let blue = 0;




function increaseRed() {
    red += 5;
    if(red > 255)
        red = 255;
    updateRGB();
}
function decreaseRed() {
    red -= 5;
    if(red < 0) 
        red = 0;
    updateRGB();
}

function increaseGreen() {
    green += 5;
    if(green > 255) 
        green = 255;
    updateRGB();
}
function decreaseGreen() {
    green -= 5;
    if(green < 0) 
        green = 0;
    updateRGB();
}

function increaseBlue() {
    blue += 5;
    if(blue > 255) 
        blue = 255;
    updateRGB();
}
function decreaseBlue() {
    blue -= 5;
    if(blue < 0) 
        blue = 0;
    updateRGB();
}

function updateRGB() {
    document.getElementById("rgb_1").innerHTML = `RGB (${red}, ${green}, ${blue})`;
    
    // Cambiar el fondo de la página
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

document.getElementById("red-plus").addEventListener("click", increaseRed);
document.getElementById("red-minus").addEventListener("click", decreaseRed);
document.getElementById("green-plus").addEventListener("click", increaseGreen);
document.getElementById("green-minus").addEventListener("click", decreaseGreen);
document.getElementById("blue-plus").addEventListener("click", increaseBlue);
document.getElementById("blue-minus").addEventListener("click", decreaseBlue);