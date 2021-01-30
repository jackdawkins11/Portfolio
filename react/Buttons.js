
import React from 'react'

/*
    Renders the buttons visible on the home page.
*/
function Buttons(props) {

    //Don't display them in this case
    if(!props.visible){
        return <div />
    }

    //Render the buttons
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