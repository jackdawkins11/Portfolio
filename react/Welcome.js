
import React from 'react'

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
        <img style={{ height: "300px" }}
            src="img/20-Scientific_Study-512.png" />
    </div>
}

export { Welcome }