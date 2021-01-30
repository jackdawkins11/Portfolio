import React, { useState } from 'react'

let screenShotStyle = {
    width: "250px"
}

let listItemStyle={
    display: "flex",
    padding: "10px",
    cursor: "pointer"
}

let listData = [
    {
        link: "/calculator/index.html",
        name: "Calculator website",
        img: "./img/calculator-screenshot.png",
        description: "Create a new account and then login to use the calculator.",
        description2: `The frontend was written once with React.
            The backend was written 5 different times in: Tomcat + Java EE + MySQL;
        NodeJS + Express + MongoDB;
        Python + Flask + MySQL; Golang + MySQL; PHP + Apache2 + MySQL.
        All implementations can be found on my github.`
    },
    {
        link: "/bank/index.html",
        name: "Bank website",
        img: "./img/bank-api-screenshot.png",
        description: "Login as \"administrator\" with password \";_a(*7&yxhER3=f\". View and create users and accounts.",
        description2: `The frontend was written in React. The backend uses Java Servlets with Tomcat 9,
        JDBC and PostgreSQL. Extensive testing with JUnit was done.`
    }
]

function OtherProjects(props) {
    const [idx, setIdx] = useState(-1)

    return <div style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
        <h2>Other websites</h2>
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {
                listData.map( (data, cIdx) => {
                    let backgroundColor = "inherit"
                    if( cIdx == idx ){
                        backgroundColor = "#949494"
                    }
                    return <div style={  Object.assign({}, listItemStyle, {backgroundColor: backgroundColor}) }
                        onMouseEnter={() => {setIdx(cIdx)}}
                        onMouseLeave={() => {setIdx(-1)}}
                    >
                        <img style={screenShotStyle} src={data.img}></img>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }} >
                            <h3> {data.name} </h3>
                            <p> {data.description} </p>
                            <p> {data.description2} </p>
                        </div>
                    </div>
                })
            }  
        </div>
    </div>
}

export { OtherProjects }