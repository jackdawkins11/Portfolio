
import React from 'react'
import { Contact } from './Contact'
import { Languages } from './Languages'
import { Menu } from './Menu'
import { Overview } from './Overview'
import { ProjectShowcase } from './ProjectShowcase'
import { Welcome } from './Welcome'
import {Buttons} from './Buttons'
import { OtherProjects } from './OtherProjects'

let style = {
    flexColumn: {
        flexGrow: 1,
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

function getPixelsInView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    //case 1: completely visible
    if (elemTop >= 0 && elemBottom <= window.innerHeight) {
        return elemBottom - elemTop
    } else if (elemTop < 0 && elemBottom <= window.innerHeight) {
        //case 2: bottom part visible
        return elemBottom
    } else if (elemTop >= 0 && elemBottom > window.innerHeight) {
        //case 3: top part visible
        return window.innerHeight - elemTop
    }
    return 0
}

//return index of elem from array which is greatest
function maxIdx(arr) {
    if (arr.length == 0) {
        return -1
    }
    let idx = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[idx]) {
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
            { name: "Other projects", ref: React.createRef() },
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

    findCurrentPane() {
        let pixelsInView = []
        for (let elem of this.contentPanes) {
            pixelsInView.push(getPixelsInView(elem.ref.current))
        }
        let idx = maxIdx(pixelsInView)
        return this.contentPanes[idx].name
    }

    toggleMenu(e) {
        e.preventDefault()
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }

    closeMenu(e) {
        this.setState({
            displayMenu: false
        })
    }

    menuClick(idx) {
        this.contentPanes[idx].ref.current
            .scrollIntoView({ behavior: "smooth", block: "center", inline: "end" })
    }

    render() {
        //simul button logic
        let toggleSimulIconUrl = null
        if (this.props.simulNotPaused) {
            toggleSimulIconUrl = "img/pause.png"
        } else {
            toggleSimulIconUrl = "img/play.png"
        }
        //Only add the close menu event listener when the menu is open
        let closeMenuListener = this.closeMenu.bind(this)
        if( !this.state.displayMenu ){
            closeMenuListener = (e) => {return }
        }
        let size = "BIG"
        if( this.state.displayMenu ){
            size = "SMALL"
        }
        //the striped background
        let contentDivLighter = Object.assign({}, style.contentDiv, style.contentDivLighter)
        return <div style={{
            position: "absolute", top: "0", left: "0",
            width: "100%", display: "flex"
        }}>
            <Menu selected={this.state.currentPane}
                contentPanes={this.contentPanes}
                menuClick={this.menuClick.bind(this)}
                visible={this.state.displayMenu}
            />
            <div style={style.flexColumn} onClick={closeMenuListener} >
                <Buttons visible={!this.state.displayMenu}
                    toggleSimulIconUrl={toggleSimulIconUrl}
                    toggleMenu={this.toggleMenu.bind(this)}
                    toggleSimulationPaused={this.props.toggleSimulationPaused}
                />
                
                <div style={style.contentDiv} ref={this.contentPanes[0].ref} >
                    <Welcome />
                </div>
                <div style={contentDivLighter} ref={this.contentPanes[1].ref} >
                    <Overview size={size} />
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[2].ref} >
                    <Languages displayGraphs={this.state.currentPane == "Languages"} />
                </div>
                <div style={contentDivLighter} ref={this.contentPanes[3].ref} >
                    <ProjectShowcase size={size} />
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[4].ref} >
                    <OtherProjects />
                </div>
                <div style={ Object.assign({}, style.contentDiv, style.contentDivLighter)} 
                    ref={this.contentPanes[5].ref} >
                    <Contact size={size} />
                </div>
            </div>
        </div>

    }
}

export { HomePage }