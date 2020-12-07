import React from 'react'
import { ChessBoard } from './ChessBoard'

function ProjectShowcase(props) {

    return <div style={{
        display: "flex", justifyContent: "space-around",
        alignItems: "center", width: "100%", padding: "25px"
    }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2>Project showcase: Artificial Intelligence </h2>
            <p style={{ width: "600px", fontSize: "25px" }}>I trained a deep convolutional neural network to
            output how good a chess position is and a probability
            distribution across the move list. I used this
            neural network in conjunction with Monte Carlo Tree Search
            to create a chess program that could play as good as top
            humans. Check out the details
                        <a style={{ textDecoration: "none", color: "#007bff" }} href="https://github.com/jackdawkins11/pytorch-alpha-zero"> here</a>.
                        To the right is a game it played against itself.
                        </p>
        </div>
        <ChessBoard width="500px" height="500px" />
    </div>
}

export {ProjectShowcase}