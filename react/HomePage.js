
import React from 'react'
import { ChessBoard } from './ChessBoard'

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

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
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
        return window.innerWidth - elemTop
    }
}

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

function Table(props) {
    let body = props.body.map((val, i) => {
        let percent = val.val * 100
        let str = percent + "%"
        if (!props.expand) {
            percent = 0
            str = ""
        }
        return <tr key={i}>
            <td style={{ fontSize: "20px", padding: "2px" }}>
                {val.name}
            </td>
            <td style={{ padding: "1px", width: "300px" }}>
                <div style={{
                    transition: "width 400ms ease-in-out",
                    width: `${percent}%`, height: "30px",
                    backgroundColor: "orange",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingRight: "3px",
                    color: "white"
                }}>{str}</div>
            </td>
        </tr>
    })
    return <table style={{ color: "inherit" }}>
        <caption style={{ fontSize: "25px", marginBottom: "20px" }}>{props.caption}</caption>
        <tbody>
            {body}
        </tbody>
    </table>
}

const languages1 = [
    { name: "Java", val: 0.9 },
    { name: "Python", val: 0.8 },
    { name: "JavaScript", val: 0.8 },
    { name: "SQL", val: 0.7 },
    { name: "PHP", val: 0.7 },
    { name: "C++", val: 0.5 },
    { name: "Golang", val: 0.5 },
    { name: "C", val: 0.5 },
    { name: "C#", val: 0.5 },
    { name: "Bash", val: 0.5 },
    { name: "Ruby", val: 0.3 }
]

const languages2 = [
    { name: "React", val: 0.9 },
    { name: "Flask", val: 0.8 },
    { name: "Express", val: 0.7 },
    { name: "Apache Tomcat", val: 0.6 },
    { name: "Apache2 Server", val: 0.4 },
    { name: "ASP.NET", val: 0.3 },
    { name: "Spring Boot", val: 0.3 },
]

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
        this.state = {
            currentPane: this.contentPanes[0].name
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
        let toggleSimulIconUrl = null
        if (this.props.simulNotPaused) {
            toggleSimulIconUrl = "img/pause.png"
        } else {
            toggleSimulIconUrl = "img/play.png"
        }
        let shouldExpandGraphs = this.state.currentPane == "Languages"
        let menubar = (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "25%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black"
            }}>
                {this.contentPanes.map( elem => {
                    let selected = elem.name == this.state.currentPane
                    let selectedStyle = {
                        color: "white",
                        fontSize: "35px"
                    }
                    let normStyle = {
                        padding: "5px",
                        color: "#d9d9d9"
                    }
                    if( selected ){
                        normStyle = Object.assign( {}, normStyle, selectedStyle )
                    }
                    return <h2 style={normStyle}>{elem.name}</h2>
                } )}
            </div>
        )
        let fullScreenFlexColumnStyle = style.fullScreenFlexColumn 
        if( this.state.displayMenu ){
            fullScreenFlexColumnStyle = Object.assign( {}, fullScreenFlexColumnStyle,
                {left: "25%", width: "75%"} )
        }else{
            menubar = <div></div>
        }
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
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%"
                    }}>
                        <div >
                            <h1 style={{ fontSize: "35px" }}>Hi.</h1>
                            <h2 style={{ fontSize: "35px" }} >I'm Jack Dawkins.</h2>
                        </div>
                        <img style={{ height: "300px" }}
                            src="img/20-Scientific_Study-512.png" />
                    </div>
                </div>
                <div style={
                    Object.assign({}, style.contentDiv, style.contentDivLighter)}
                    ref={this.contentPanes[1].ref}
                    >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "100%"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div style={{ display: "flex" }}>
                                <img style={{ height: "150px", margin: "20px" }} src="img/binary-file.png" />
                                <img style={{ height: "150px", margin: "20px" }} src="img/Icon_Function.png" />
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img style={{ height: "150px", margin: "20px" }} src="img/dnn-28vmlum.png" />
                            </div>
                        </div>
                        <p style={{ width: "550px", fontSize: "30px" }}>I am a recent graduate of Hamline Univetsity (November 2020),
                        with a Computer Science Major and Mathematics Minor. I am knowledgeable
                        of important computer science topics, including Artificial
                        Intelligence methods such as deep neural networks. I also have experience in
                        multiple programming languages and frameworks.</p>
                    </div>
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[2].ref} >
                    <div ref={this.graph1Ref} style={{ display: "flex" }}>
                        <Table caption="Programming languages"
                            expand={shouldExpandGraphs} body={languages1} />
                        <Table caption="Frameworks and servers"
                            expand={shouldExpandGraphs} body={languages2} />
                    </div>
                </div>
                <div style={Object.assign({}, style.contentDiv, style.contentDivLighter)}
                 ref={this.contentPanes[3].ref} >
                    <div style={{
                        display: "flex", justifyContent: "space-around",
                        alignItems: "center", width: "100%", padding: "25px"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <h2>Project showcase: Artificial Intelligence </h2>
                            <p style={{ width: "600px", fontSize: "25px" }}>I trained a deep convolutional neural network to
                            output how good a chess position is and a probability
                            distribution across the move list. I used this
                            neural network in conjunction with Monte Carlo Tree Search
                            to create a chess program that could play as good as top
                            humans. Check out the details
                        <a style={{ textDecoration: "none", color: "#007bff" }} href="https://github.com/jackdawkins11/pytorch-alpha-zero"> here</a>.
                        To the right is a game it played against itself.
                        </p>
                        </div>
                        <ChessBoard width="500px" height="500px" />
                    </div>
                </div>
                <div style={style.contentDiv} ref={this.contentPanes[4].ref} >
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div >
                            <h3 style={{ fontSize: "25px" }}> Email </h3>
                            <h2 style={{ fontSize: "27px" }} > jackdawkins1974@gmail.com </h2>
                        </div>
                        <div style={{ margin: "0 50px 0 100px" }}>
                            <h3 style={{ fontSize: "25px" }} > Phone </h3>
                            <h2 style={{ fontSize: "27px" }} > 651 592 1368 </h2>
                        </div>
                        <div style={{ margin: "0 100px 0 50px" }} >
                            <h3 style={{ fontSize: "25px" }} > Location </h3>
                            <h2 style={{ fontSize: "27px" }} > St. Paul, MN, USA </h2>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "25px" }} > Social media </h3>
                            <div>
                                <a href="https://github.com/jackdawkins11">
                                    <img className="iconButton" style={{ width: "50px" }} src="img/linkedin.png" />
                                </a>
                                <a href="https://www.linkedin.com/in/john-dawkins-0b798b19a/">
                                    <img className="iconButton" style={{ width: "50px" }} src="img/github.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export { HomePage }