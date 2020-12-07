
import React from 'react'


//TODO: change size with props

function Contact(props) {

    return <div style={{ display: "flex", justifyContent: "space-around" }}>
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

}

export {Contact}