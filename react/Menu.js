
import React from 'react'


function Menu(props) {

    return <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "25%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black"
    }}>
        {props.contentPanes.map(elem => {
            let selectedStyle = {
                color: "white",
                fontSize: "35px"
            }
            let normStyle = {
                padding: "5px",
                color: "#d9d9d9"
            }
            if (props.selected == elem.name ) {
                normStyle = Object.assign({}, normStyle, selectedStyle)
            }
            return <h2 style={normStyle}>{elem.name}</h2>
        })}
    </div>
}

export {Menu}