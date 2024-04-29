
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
            gridDiv.classList.add("gridDivs")
            gridDiv.addEventListener("mouseenter", randomColor);
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

    let redHex = red.toString(16);
    let greenHex = green.toString(16);
    let blueHex = blue.toString(16);

    color = "#" + redHex + greenHex + blueHex;
    this.style.backgroundColor = color;
}



document.addEventListener("DOMContentLoaded", ()=> {

    const slider = document.querySelector(".slider");
    let gridSize = slider.value;
    createGrid(gridSize);

    slider.addEventListener("input", ()=> {
        let gridSize = slider.value;
        createGrid(gridSize);      
    });

    
});


