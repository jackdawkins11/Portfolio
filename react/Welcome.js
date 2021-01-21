
import React from 'react'

let imgStyle = {height: "150px",
    margin: "20px",
    transition: "all 500ms ease-in-out"
 }

function Welcome(props) {
    return <div style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%"
    }}>
        <div >
            <h1 style={{ fontSize: "35px" }}>Hi.</h1>
            <h2 style={{ fontSize: "35px" }} >I'm Jack Dawkins.</h2>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div style={{ display: "flex" }}>
                <img style={imgStyle} src="img/binary-file.png" />
                <img style={imgStyle} src="img/Icon_Function.png" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={imgStyle} src="img/dnn-28vmlum.png" />
            </div>
        </div>
    </div>
}

/*
<img style={{ height: "300px" }}
            src="img/20-Scientific_Study-512.png" />
*/

export { Welcome }