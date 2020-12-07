
import React from 'react'


function Overview(props) {

    return <div style={{
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

}

export {Overview}