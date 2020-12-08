
import React from 'react'

function Buttons(props) {

    if(!props.visible){
        return <div />
    }

    return <div 
        style={{ position: "fixed", margin: "30px 0 0 30px" }}>
        <img src="img/menuIcon.png"
            style={{
                cursor: "pointer", width: "50px", height: "50px",
                marginRight: "30px"
            }}
            onClick={props.toggleMenu} />
        <img src={props.toggleSimulIconUrl}
            style={{
                width: "50px",
                height: "50px",
                cursor: "pointer"
            }}
            onClick={props.toggleSimulationPaused} />
    </div>
}

export {Buttons}