import React from "react";
import GridSquare from "./GridSquare";

//Represents a 10x18 grid of grid squares

export default function GridBoard(){
    //generates array of 18 rows, each containing 10 Grid squares
    const grid = []
    for (let row = 0; row < 18; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color='1'/>)
        }
    }
    // The components generated in `makeGrid` are rendered in div.grid-board
    return(
        <div className="grid-board">
            {grid}
        </div>
    )
}