
import React from 'react'

let sizes = {
    "BIG": {
        "imgHeight": "150px",
        "textSize": "30px",
        "textWidth": "550px"
    },
    "MED": {
        "imgHeight": "100px",
        "textSize": "25px",
        "textWidth": "400px"
    },
    "SMALL": {
        "imgHeight": "120px",
        "textSize": "24px",
        "textWidth": "auto"
    }
}

function Overview(props) {

    let imgStyle = { height: sizes[ props.size ].imgHeight,
        margin: "20px",
        transition: "all 500ms ease-in-out"
     }
    let textStyle = {
        fontSize: sizes[ props.size ].textSize,
        width: sizes[ props.size ].textWidth
    }

    return <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%"
    }}>
        <div style={{
            display: "flex", flexDirection: "column"
        }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="./docs/Resume.pdf" >
                    <img style={imgStyle} src="img/resumeIcon.png" />
                </a>
            </div>
            <div style={{ display: "flex", alignItems: "center"}}>
                <a href="https://www.hamline.edu" >
                    <img style={imgStyle} src="img/hamlineIcon.png" />
                </a>
                <a href="https://education.oracle.com/oracle-certified-associate-java-se-8-programmer/trackp_333" >
                    <img style={ Object.assign({}, imgStyle, {height: "83px"} )}
                    src="img/O_Java-SE-8-OCA-clr.gif" />
                </a>
            </div>
        </div>
        <p style={textStyle}>
        I am a recent graduate of Hamline University (November 2020),
        with a Computer Science Major and Mathematics Minor. I am knowledgeable
        of important computer science topics, including Artificial
        Intelligence methods such as deep neural networks. I also have experience in
        multiple programming languages and frameworks. Click on the resume icon to the
        left to see my resume.
        </p>
    </div>

}

export {Overview}