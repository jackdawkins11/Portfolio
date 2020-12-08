
import React from 'react'

let sizes = {
    BIG: {
        h3Font: "25px",
        h2Font: "27px",
        margin: "50px"
    },
    MED: {
        h3Font: "25px",
        h2Font: "27px",
        margin: "50px"
    },
    SMALL: {
        h3Font: "25px",
        h2Font: "27px",
        margin: "50px"
    }
}

function Contact(props) {

    let divStyle = {
        marginRight: sizes[ props.size ].margin,
        marginLeft: sizes[ props.size ].margin
    }

    let h2Style = {
        fontSize: sizes[ props.size ].h2Font
    }

    let h3Style = {
        fontSize: sizes[ props.size ].h3Font
    }

    return <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        <div >
            <h3 style={h3Style}> Email </h3>
            <h2 style={h2Style} > jackdawkins1974@gmail.com </h2>
        </div>
        <div style={divStyle} >
            <h3 style={h3Style} > Phone </h3>
            <h2 style={h2Style} > 651 592 1368 </h2>
        </div>
        <div style={divStyle} >
            <h3 style={h3Style} > Location </h3>
            <h2 style={h2Style} > St. Paul, MN, USA </h2>
        </div>
        <div>
            <h3 style={h3Style} > Social media </h3>
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

}

export {Contact}