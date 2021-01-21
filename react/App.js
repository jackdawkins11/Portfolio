
import React, { useState } from "react";
import { render } from "react-dom";
import { BackgroundCanvas } from "./BackgroundCanvas";
import {Simulation} from './Simulation'
import {LandingPage} from './LandingPage'
import {HomePage} from './HomePage'
import { ChessBoard } from "./ChessBoard";

/*
    This component stores the simulation used for the background
*/
class App extends React.Component {
    constructor(props){
        super(props)
        let simul = new Simulation(10000, 10000)
        simul.randomAsteroids()
        this.state = {
            simul: simul,
            landingPage: true
        }
        this.updateBackgroundSimulation = this.updateBackgroundSimulation.bind(this)
    }
    componentDidMount(){
        requestAnimationFrame(this.updateBackgroundSimulation)
    }
    updateBackgroundSimulation(){
        let simul = this.state.simul
        simul.update()
        this.setState({
            simul: simul
        })
        requestAnimationFrame(this.updateBackgroundSimulation)
    }
    toggleSimulationPaused(){
        let simul = this.state.simul
        simul.paused = !simul.paused
        this.setState({
            simul: simul
        })
    }
    toHomePage(){
        this.setState({
            landingPage: false
        })
    }
    render(){
        let content = null
        if( this.state.landingPage ){
            content = <LandingPage toHomePage={this.toHomePage.bind(this)} />
        }else{
            content = <HomePage
                        toggleSimulationPaused={this.toggleSimulationPaused.bind(this)}
                        simulNotPaused={!this.state.simul.paused} />
        }
        return <div style={{fontFamily: "sans-serif"}}>
            <BackgroundCanvas simul={this.state.simul} />
            {content}
        </div>
    }
}

render(<App />, document.getElementById("root"));
