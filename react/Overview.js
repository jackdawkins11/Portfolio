
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
            display: "flex"
        }}>
            <div style={{ display: "flex" }}>
                <a href="./docs/Resume.pdf" style={{ textDecoration: "none", color: "#007bff" }}>
                    <img style={imgStyle} src="img/resumeIcon.png" />
                </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={imgStyle} src="img/hamlineIcon.png" />
            </div>
        </div>
        <p style={textStyle}>
        I am a recent graduate of Hamline University (November 2020),
        with a Computer Science Major and Mathematics Minor. I am knowledgeable
        of important computer science topics, including Artificial
        Intelligence methods such as deep neural networks. I also have experience in
        multiple programming languages and frameworks. Click on the resume icon to the
        right to see my resume.
        </p>
    </div>

}

export {Overview}