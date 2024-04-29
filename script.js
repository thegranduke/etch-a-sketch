
const GRIDSIZE = 16;
const CONTAINER_SIZE = 450;




function createGrid(GRIDSIZE){
    let divDimensions = (CONTAINER_SIZE/GRIDSIZE);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    

    for( let i = 0; i < GRIDSIZE; i++ ){
        for(let j = 0; j < GRIDSIZE; j++ ){
            let gridDiv = document.createElement("div");
            gridDiv.style.width = divDimensions + "px";
            gridDiv.style.height = divDimensions + "px";
            gridDiv.style.border = "1px solid black";
            gridDiv.style.boxSizing = "border-box";
            gridDiv.classList.add("gridDivs");
            gridDiv.style.backgroundColor = "rgb(255,255,255)";
            gridDiv.addEventListener("mouseenter", solidColor);
            container.appendChild(gridDiv);
        }
    }
}



function solidColor(){
    const solidColorPicker = document.querySelector(".color");
    let solidColor = solidColorPicker.value;
    this.style.backgroundColor = solidColor;
}

function randomColor(){
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let redHex = red.toString(16).padStart(2, '0');
    let greenHex = green.toString(16).padStart(2, '0');
    let blueHex = blue.toString(16).padStart(2, '0');

    color = "#" + redHex + greenHex + blueHex;
    this.style.backgroundColor = color;
}

function colorShading(color,element){
    console.log(color);
    
    let formattedValue = color.match(/\d+/g).map(Number);
    
    let red = Math.max(formattedValue[0] - 25, 0);
    let green = Math.max(formattedValue[1] - 25, 0);
    let blue = Math.max(formattedValue[2] - 25, 0);


    console.log(formattedValue);
    console.log(red);
    console.log(green);
    console.log(blue);

    let newColor = "rgb(" + red + "," + green + "," + blue + ")";

    element.style.backgroundColor = newColor;
    
    
    return newColor;
}



document.addEventListener("DOMContentLoaded", ()=> {

    const slider = document.querySelector(".slider");
    let gridSize = slider.value;
    createGrid(gridSize);

    slider.addEventListener("input", ()=> {
        let gridSize = slider.value;
        createGrid(gridSize);      
    });

    const rainbowButton = document.querySelector(".rainbow-button");
    rainbowButton.addEventListener("click", () =>{
        let gridDivs = document.querySelectorAll(".gridDivs");
        for( let i = 0; i < gridDivs.length; i++){
            gridDivs[i].addEventListener("mouseenter",randomColor);
        }

    });

    const shadingButton = document.querySelector(".shading-button");
    shadingButton.addEventListener("click", () =>{
        let gridDivs = document.querySelectorAll(".gridDivs");
        for( let i = 0; i < gridDivs.length; i++){

            // Store the original color of each gridDiv using a custom data attribute
            gridDivs[i].setAttribute('data-original-color', gridDivs[i].style.backgroundColor);
            
            gridDivs[i].addEventListener("mouseenter",(event) => { 

                let divColor = event.target.getAttribute('data-original-color');
                divColor = colorShading(divColor,event.target);
                gridDivs[i].setAttribute('data-original-color', divColor);
            });
        }

    });

    
});


