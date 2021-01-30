
import React from "react";
import { render } from "react-dom";
import { BackgroundCanvas } from "./BackgroundCanvas";
import { HomePage } from './HomePage';
import { LandingPage } from './LandingPage';
import { Simulation } from './Simulation';

/*
    This is the root component.

    It stores the simulation which is used in to paint the background canvas

    It renders the home page or landing page
*/
class App extends React.Component {
    constructor(props){
        super(props)

        //The simulation being run to display the background is a state variable
        let simul = new Simulation(10000, 10000)
        simul.randomAsteroids()

        //state also stores whether to display landing page or home page
        this.state = {
            simul: simul,
            landingPage: true
        }

    }

    componentDidMount(){
        //Start the animation loop
        requestAnimationFrame(this.updateBackgroundSimulation.bind(this))
    }

    //Updates the simulation
    updateBackgroundSimulation(){
        //Update state of simulation
        this.state.simul.update()

        //Let react know state was updated
        this.setState({})

        //Animation loop
        requestAnimationFrame(this.updateBackgroundSimulation.bind(this))
    }


    toggleSimulationPaused(){

        //Pause the simulation
        this.state.simul.paused = !this.state.simul.paused

        //Let react know state was updated
        this.setState({})
    }

    //Change state to display home page
    toHomePage(){
        this.setState({
            landingPage: false
        })
    }

    render(){
        //content is home page or landing page
        let content = null
        if( this.state.landingPage ){
            content = <LandingPage toHomePage={this.toHomePage.bind(this)} />
        }else{
            content = <HomePage
                        toggleSimulationPaused={this.toggleSimulationPaused.bind(this)}
                        simulNotPaused={!this.state.simul.paused} />
        }

        //Render the background simulation and content
        return <div style={{fontFamily: "sans-serif"}}>
            <BackgroundCanvas simul={this.state.simul} />
            {content}
        </div>
    }
}

render(<App />, document.getElementById("root"));
