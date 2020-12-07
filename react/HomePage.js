
import React from 'react'
import { Contact } from './Contact'
import { Languages } from './Languages'
import { Menu } from './Menu'
import { Overview } from './Overview'
import { ProjectShowcase } from './ProjectShowcase'
import {Welcome} from './Welcome'

let style = {
    fullScreenFlexColumn: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        color: "#d9d9d9",
        transition: "width 400ms ease-in-out",
    },
    contentDiv: {
        backgroundColor: "rgba(100, 100, 100, 0.5)",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    contentDivLighter: {
        backgroundColor: "rgba(150, 150, 150, 0.5)"
    },
}

function getPixelsInView(el){
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    //case 1: completely visible
    if( elemTop >= 0 && elemBottom <= window.innerHeight ){
        return elemBottom - elemTop
    }else if( elemTop < 0 && elemBottom <= window.innerHeight ){
        //case 2: bottom part visible
        return elemBottom
    }else if( elemTop >= 0 && elemBottom > window.innerHeight ){
        //case 3: top part visible
        return window.innerHeight - elemTop
    }
    return 0
}

//return index of elem from array which is greatest
function maxIdx( arr ){
    if( arr.length == 0){
        return -1
    }
    let idx = 0
    for(let i= 1; i < arr.length; i++){
        if( arr[i] > arr[idx] ){
            idx = i
        }
    }
    return idx
}

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        /*
            We use these to track where on the website the user is
        */
        this.contentPanes = [
            { name: "Welcome", ref: React.createRef() },
            { name: "Overview", ref: React.createRef() },
            { name: "Languages", ref: React.createRef() },
            { name: "Project showcase", ref: React.createRef() },
            { name: "Contact", ref: React.createRef() },
        ]
        //Store which of the above contentPanes the user is browsed to
        this.state = {
            currentPane: this.contentPanes[0].name,
            displayMenu: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        this.setState({
            currentPane: this.findCurrentPane()
        })
    }

    findCurrentPane(){
        let pixelsInView = []
        for( let elem of this.contentPanes ){
            pixelsInView.push( getPixelsInView(elem.ref.current) )
        }
        let idx = maxIdx( pixelsInView )
        return this.contentPanes[ idx ].name
    }

    toggleMenu(e){
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }

    render() {
        //simul button logic
        let toggleSimulIconUrl = null
        if (this.props.simulNotPaused) {
            toggleSimulIconUrl = "img/pause.png"
        } else {
            toggleSimulIconUrl = "img/play.png"
        }
        //menu logic
        let menubar = <Menu selected={this.state.currentPane} contentPanes={this.contentPanes} />
        let fullScreenFlexColumnStyle = style.fullScreenFlexColumn 
        if( this.state.displayMenu ){
            fullScreenFlexColumnStyle = Object.assign( {}, fullScreenFlexColumnStyle,
                {left: "25%", width: "75%"} )
        }else{
            menubar = <div></div>
        }
        //the striped background
        let contentDivLighter = Object.assign({}, style.contentDiv, style.contentDivLighter)
        return <div>
            {menubar}
            <div style={fullScreenFlexColumnStyle}>
                <img src={toggleSimulIconUrl}
                    style={{
                        position: "fixed",
                        margin: "30px 0 0 30px",
                        width: "50px",
                        height: "50px"
                    }}
                    onClick={this.props.toggleSimulationPaused} />
                <button onClick={this.toggleMenu.bind(this)}>Menu</button>
                <div style={style.contentDiv} ref={this.contentPanes[0].ref} >
                    <Welcome />
                </div>
                <div style={contentDivLighter} ref={this.contentPanes[1].ref} >
                    <Overview />
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[2].ref} >
                    <Languages displayGraphs={this.state.currentPane == "Languages"} />
                </div>
                <div style={contentDivLighter} ref={this.contentPanes[3].ref} >
                    <ProjectShowcase />
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[4].ref} >
                    <Contact />
                </div>
            </div>
        </div>

    }
}

export { HomePage }