
import React from 'react'
import {ChessBoard} from './ChessBoard'

let style = {
    fullScreenFlexColumn: {
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        color: "#d9d9d9",
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

function Table(props) {
    let body = props.body.map((val, i) => {
        let percent = val.val * 100
        let str = percent + "%"
        if(!props.expand){
            percent = 0
            str = ""
        }
        return <tr key={i}>
            <td style={{fontSize: "20px", padding: "2px"}}>
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
    return <table style={{color: "inherit"}}>
        <caption style={{fontSize: "25px", marginBottom: "20px"}}>{props.caption}</caption>
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
        this.graph1Ref = React.createRef()
        this.graph2Ref = React.createRef()
        this.state = {
            displayGraphs1: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (isScrolledIntoView(this.graph1Ref.current)) {
            this.setState({
                displayGraphs1: true
            })
        }
    }

    render() {
        let toggleSimulIconUrl = null
        if (this.props.simulNotPaused) {
            toggleSimulIconUrl = "img/pause.png"
        } else {
            toggleSimulIconUrl = "img/play.png"
        }
        return <div style={style.fullScreenFlexColumn}>
            <img src={toggleSimulIconUrl}
                style={{
                    position: "fixed",
                    margin: "30px 0 0 30px",
                    width: "50px",
                    height: "50px"
                }}
                onClick={this.props.toggleSimulationPaused} />
            <div style={style.contentDiv}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "500px"
                }}>
                    <div >
                        <h1 >Hi.</h1><h2>I'm Jack Dawkins.</h2>
                    </div>
                    <img style={{ height: "200px" }}
                        src="img/20-Scientific_Study-512.png" />
                </div>
            </div>
            <div style={
                Object.assign({}, style.contentDiv, style.contentDivLighter)} >
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <p style={{ width: "500px", fontSize: "23px" }}>I am a recent graduate of Hamline Univetsity (November 2020),
                    with a Computer Science Major and Mathematics Minor. I am knowledgeable
                    of important computer science topics, including Artificial
                    Intelligence methods such as deep neural networks. I also have experience in
                        multiple programming languages and frameworks.</p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <div style={{ display: "flex" }}>
                            <img style={{ height: "100px" }} src="img/binary-file.png" />
                            <img style={{ height: "100px" }} src="img/Icon_Function.png" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img style={{ height: "100px" }} src="img/dnn-28vmlum.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={style.contentDiv} >
                <div style={{ marginTop: "50px",
                    display: "flex", justifyContent: "center", alignItems: "center" }}
                    ref={this.graph1Ref} >
                    <Table caption="Programming languages"
                        expand={this.state.displayGraphs1} body={languages1} />
                    <Table caption="Frameworks and servers"
                        expand={this.state.displayGraphs1} body={languages2} />
                </div>
                <p style={{margin: "50px 50px", fontSize: "23px"}}>
                    I base my strength on experience, which at the moment is just personal projects,
                    and my understanding of the features of the language and related tools.
                </p>
            </div>
            <div style={style.contentDiv} >
                <ChessBoard />
            </div>
        </div>
    }
}

export { HomePage }