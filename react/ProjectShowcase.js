import React from 'react'
import { ChessBoard } from './ChessBoard'

let sizes = {
    BIG: {
        "pWidth": "600px",
        "pFontSize": "25px",
        "hFontSize": "28px",
        "chessWidth": "500px"
    },
    MED: {
        "pWidth": "420px",
        "pFontSize": "20px",
        "hFontSize": "22px",
        "chessWidth": "400px"
    },
    SMALL: {
        "pWidth": "450px",
        "pFontSize": "21px",
        "hFontSize": "23px",
        "chessWidth": "250px"
    }
}

let logoStyle={
    width: "100px"
}

function ProjectShowcase(props) {

    let pStyle = { width: sizes[ props.size ].pWidth, fontSize: sizes[props.size].pFontSize }
    let hStyle = { fontSize: sizes[ props.size ].hFontSize }
    let chessWidth = sizes[ props.size ].chessWidth

    return <div style={{
        display: "flex", justifyContent: "space-around",
        alignItems: "center", width: "100%", padding: "25px"
    }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 style={hStyle}>Project showcase: Artificial Intelligence </h2>
            <p style={pStyle}>I trained a deep convolutional neural network to
            output how good a chess position is and a probability
            distribution across the move list. I used this
            neural network in conjunction with Monte Carlo Tree Search
            to create a chess program that could play as good as top
            humans. Check out the details
                        <a style={{ textDecoration: "none", color: "#007bff" }} href="https://github.com/jackdawkins11/pytorch-alpha-zero"> here</a>.
                        To the right is a game it played against itself.
                        </p>
            <div style={{display: "flex", alignItems: "center"}}>
                <img style={logoStyle} src="./img/python-logo.png"></img>
                <img style={logoStyle} src="./img/pytorch-logo.png"></img>
                <img style={logoStyle} src="./img/nvidia-cuda-logo.jpg"></img>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img style={{width: chessWeidth}} src="./img/image.jpeg"></img>
        </div>
    </div>
}

export {ProjectShowcase}
