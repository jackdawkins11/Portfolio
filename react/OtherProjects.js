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
	    link: "http://ec2-3-86-192-14.compute-1.amazonaws.com:8080",
        name: "Database demo",
        img: "./img/Screen Shot 2022-11-04 at 7.42.04 AM.png",
        description: "Add and delete items and relationships in a mnay-to-many database.",
        description2: `The frontend was written in React. The backend uses Spring-boot`,
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
