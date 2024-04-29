
const GRIDSIZE = 16;
const CONTAINER_SIZE = 450;




function createGrid(GRIDSIZE){
    let divDimensions = (CONTAINER_SIZE/GRIDSIZE);
    const container = document.querySelector(".container");
    

    for( let i = 0; i < GRIDSIZE; i++ ){
        for(let j = 0; j < GRIDSIZE; j++ ){
            console.log("i got here");
            console.log(container);
            let gridDiv = document.createElement("div");
            gridDiv.style.width = divDimensions + "px";
            gridDiv.style.height = divDimensions + "px";
            gridDiv.style.border = "1px solid black";
            gridDiv.style.boxSizing = "border-box";
            container.appendChild(gridDiv);
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    createGrid(16);
});


