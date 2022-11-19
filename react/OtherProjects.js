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
	    link: "http://ec2-54-175-18-115.compute-1.amazonaws.com/index.html",
        name: "Chess AI",
        img: "./img/image.jpeg",
        description: "Play against my chess AI! Hopefully it's not handling too many requests.",
        description2: `Details above`,
        tools: [
            "./img/react-logo.png",
            "./img/pytorch-logo.png",
        ]
    },
    {
	    link: "http://ec2-3-89-31-3.compute-1.amazonaws.com:8080/",
        name: "Database demo",
        img: "./img/Screen Shot 2022-11-04 at 7.42.04 AM.png",
        description: "Add and delete items and relationships in a mnay-to-many database.",
        description2: `The frontend was written in React. The backend uses Spring-boot`,
        tools: [
            "./img/react-logo.png",
            "./img/java-logo.png",
        ]
    },
    {
	    link: "http://ec2-54-234-238-21.compute-1.amazonaws.com:8080/",
        name: "Calculator app",
        img: "./img/calculator-screenshot.png",
        description: "Login and then use the calculator.",
        description2: `The frontend was written in React. The backend uses Spring-boot`,
        tools: [
            "./img/react-logo.png",
            "./img/java-logo.png",
        ]
    },
    {
	    link: "http://ec2-54-242-88-239.compute-1.amazonaws.com:8080/BankAPI/",
        name: "Bank API",
        img: "./img/bank-api-screenshot.png",
        description: "Login using 'administrator' and ';_a(*7&yxhER3=f' and then create users and accounts with 3 roles: Admin, Employee, Standard.",
        description2: `The frontend was written in React. The backend uses Java EE`,
        tools: [
            "./img/react-logo.png",
            "./img/java-logo.png",
        ]
    },
    {
	    link: "http://ec2-54-157-210-122.compute-1.amazonaws.com:8080",
        name: "Text server",
        img: "./img/Screen Shot 2022-11-15 at 8.42.09 PM.png",
        description: "Add messages to the server",
        description2: `The frontend was written in React. The backend uses spring-boot`,
        tools: [
            "./img/react-logo.png",
            "./img/java-logo.png",
        ]
    },
    {
	    link: "http://ec2-44-202-50-165.compute-1.amazonaws.com:8080/",
        name: "Image+Text server",
        img: "./img/Screen Shot 2022-11-15 at 8.42.19 PM.png",
        description: "Add messages and images to the server",
        description2: `The frontend was written in React. The backend uses spring boot`,
        tools: [
            "./img/react-logo.png",
            "./img/java-logo.png",
        ]
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
                        onClick={() => {
                            window.location = data.link
                        }}
                    >
                        <img style={screenShotStyle} src={data.img}></img>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }} >
                            <h3> {data.name} </h3>
                            <p> {data.description} </p>
                        </div>
                        <div style={{display: "flex", flexWrap: "wrap"}}>{
                            data.tools.map( tool =>
                            <img src={tool} style={{height: "50px"}}></img>
                        )
                        }</div>
                    </div>
                })
            }  
        </div>
    </div>
}

export { OtherProjects }
