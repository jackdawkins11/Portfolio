import React from 'react'

/*
    Renders a canvas. When props.simul is updated,
    the canvas is repainted using props.simul
*/
class BackgroundCanvas extends React.Component {
    constructor(props){
        super(props)

        //We need access to the canvas
        this.canvasRef = React.createRef()
    }

    componentDidUpdate(){
        //Get the dom node
        this.canvas = this.canvasRef.current

        //Set its size to the size of the window
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        //Repaint the simulation
        this.props.simul.paint(this.canvas, this.canvas.getContext('2d'))
    }

    render(){
        //Render the canvas
        return <canvas ref={this.canvasRef}
            style={{
                backgroundColor: "#2e2e2e",
                position: "fixed",
                zIndex: -100,
                top: 0,
                left: 0
            }}
            ></canvas>
    }
}

export {BackgroundCanvas}