
import React from "react";
import { render } from "react-dom";
import { BackgroundCanvas } from "./BackgroundCanvas";
import { HomePage } from './HomePage';
import { LandingPage } from './LandingPage';

/*
    This is the root component.

    It stores the simulation which is used in to paint the background canvas

    It renders the home page or landing page
*/
class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            landingPage: true,
	    simulPaused: false
        }

    }

    toggleSimulationPaused(){
        //Let react know state was updated
        this.setState({simulPaused: !this.state.simulPaused})
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
                        simulNotPaused={!this.state.simulPaused} />
        }

        //Render the background simulation and content
        return <div style={{fontFamily: "sans-serif"}}  >
            <BackgroundCanvas paused={this.state.simulPaused}/>
            {content}
        </div>
    }
}

render(<App />, document.getElementById("root"));
