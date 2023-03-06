import React from "react";

//Reqresents a grid square with a color

export default function GridSquare({ color }) {
    const classes = `grid-square color-${color}`
    return <div className={ classes }/>
}