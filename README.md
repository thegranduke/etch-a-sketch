# Grid Sketch Tool

Welcome to the **Grid Sketch Tool**! This interactive drawing application lets you create colorful grid-based art right in your browser. Adjust the grid size, experiment with colors, and add unique effects with buttons that enable random colors, shading, and an eraser.

## Features

- **Grid Customization:** Adjust the grid size for finer or broader strokes.
- **Solid Coloring:** Apply a solid color to grid cells by selecting a color and dragging over the cells.
- **Random Colors:** Each cell can be colored randomly, producing vibrant and unique artwork.
- **Shading Effect:** Add shading to each cell with every stroke, creating a layered look.
- **Eraser Tool:** Use the eraser to reset specific cells back to white.
- **Border Toggle:** Turn grid borders on and off to focus on your artwork.
- **Clear Button:** Clear the canvas and start fresh.

## How to Use

1. **Grid Size Adjustment**
    
    Adjust the grid size using the slider to set the number of cells per row and column. The grid size automatically updates as you change the slider's value.
    
2. **Drawing Modes**
    - **Solid Color Mode:** Click the color picker to select a color, then drag or click on cells to apply that color.
    - **Rainbow Mode:** Click the rainbow button for random colors. Click and drag over cells to see them transform with each stroke.
    - **Shading Mode:** The shading button adds a darker tint to cells each time you color them. Click and drag over cells for a gradient effect.
    - **Eraser Mode:** Use the eraser to clear any cell back to white.
3. **Additional Buttons**
    - **Border Toggle:** Show or hide cell borders.
    - **Clear Button:** Clears the entire canvas, allowing you to start a new drawing.

## Code Breakdown

### Variables and Functions

- `CONTAINER_SIZE`: The overall size of the drawing area in pixels.
- **`createGrid(GRIDSIZE)`**: Dynamically generates a grid based on the selected size, with cells ready to respond to color and effects.
- **`solidColor(element)`**: Colors an individual cell with the user-selected solid color.
- **`erase(element)`**: Resets the cell to white.
- **`randomColor(element)`**: Randomly assigns a color to a cell, allowing for unique patterns.
- **`colorShading(color, element)`**: Darkens the current color of a cell, adding a shading effect.

### Event Listeners

- **`DOMContentLoaded`**: Initializes the grid and sets up all event listeners.
- **Buttons**:
    - Each button (`rainbow`, `shading`, `clear`, `border toggle`, `eraser`) enables its respective functionality, enhancing the drawing experience.

## Future Improvements

Some ideas for future development:

- **Save and Load Art**: Save and reload drawings for later editing.
- **Undo/Redo Functionality**: Add undo/redo buttons for more control over your artwork.
- **Color Palette Customization**: Offer preset color palettes for quicker color selection.

## Installation

To run the **Grid Sketch Tool**, simply download the code and open the HTML file in a modern web browser.

---

Enjoy exploring your creativity with the Grid Sketch Tool! Whether you're creating simple designs or complex color patterns, this tool is perfect for anyone who loves digital art.







