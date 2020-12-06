
import React from 'react'

let style = {
    fullScreenCenterer: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#d6d6d6",
    },
}

const REQUIREDMOUSESPEED = 8000

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.timestamp = null
    }

    mouseMove( e ){
        if( this.timestamp == null ){
            this.timestamp = Date.now()
            this.mouseX = e.screenX;
            this.mouseY = e.screenY;
            return;
        }
        let dt = ( Date.now() - this.timestamp ) / 1000
        let dx = e.screenX - this.mouseX
        let dy = e.screenY - this.mouseY
        let d = Math.sqrt( dx * dx + dy * dy )
        let speed = d / dt

        if( speed > REQUIREDMOUSESPEED){
            this.props.toHomePage()
        }

        this.timestamp = Date.now()
        this.mouseX = e.screenX;
        this.mouseY = e.screenY;
    }

    render(){
        return <div style={style.fullScreenCenterer}
            onMouseMove={this.mouseMove.bind(this)} >
            <p style={{
                fontSize: "30px"
                }}>
                {"Move the mouse " + REQUIREDMOUSESPEED + " pixels per second to enter.."}
            </p>
        </div>
    }
}

export {LandingPage}