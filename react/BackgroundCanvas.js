import React from 'react'

/*
    Renders a canvas. When props.simul is updated,
    the canvas is painted using the simulation class
    stored in props.simul
*/
class BackgroundCanvas extends React.Component {
    constructor(props){
        super(props)
        this.canvasRef = React.createRef()
    }

    componentDidUpdate(){
        this.canvas = this.canvasRef.current
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.ctx = this.canvas.getContext('2d')
        this.props.simul.paint(this.canvas, this.ctx)
    }

    render(){
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