
import React from 'react'


function Menu(props) {

    if( !props.visible ){
        return <div />
    }

    //the first div gets stretched to the bottom of the
    //page by the parent element
    //the inner div has position sticky 
    return <div style={{backgroundColor: "black", opacity: "0.75"}}>
        <div style={{
        width: "300px", 
        top: 0,
        position: "sticky",
        display: "flex",
        flexDirection: "column"}}>
            {props.contentPanes.map( (elem, idx) => {
                let selectedStyle = {
                    color: "white",
                    fontSize: "35px"
                }
                let normStyle = {
                    padding: "5px",
                    color: "#d9d9d9",
                    cursor: "pointer"
                }
                if (props.selected == elem.name) {
                    normStyle = Object.assign({}, normStyle, selectedStyle)
                }
                return <h2 key={idx} onClick={(e) => props.menuClick(idx)}
                    style={normStyle}>{elem.name}</h2>
            })}
        </div>
    </div>
}

export { Menu }