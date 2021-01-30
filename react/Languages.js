
import React from 'react'

//Renders a horizontal bar graph
//Requires a list of names and percentages as input
//as well as whether to expand the bar graphs or not
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
    { name: "SQL", val: 0.8 },
    { name: "C++", val: 0.6 },
    { name: "Golang", val: 0.5 },
    { name: "C", val: 0.5 },
    { name: "C#", val: 0.5 },
    { name: "Bash", val: 0.4 },
    { name: "PHP", val: 0.4 },
    { name: "Ruby", val: 0.3 }
].sort( (a,b) => b.val - a.val )

const languages2 = [
    { name: "React", val: 0.8 },
    { name: "Spring Boot", val: 0.6 },
    { name: "Apache Tomcat", val: 0.6 },
    { name: "Pytorch", val: 0.6 },
    { name: "Flask", val: 0.5 },
    { name: "Express", val: 0.5 },
    { name: "Nginx", val: 0.4 },
    { name: "Apache2 Server", val: 0.4 },
    { name: "Tensorflow", val: 0.5 },
    { name: "ASP.NET Core", val: 0.3 },
    { name: "Hibernate/JPA", val: 0.3 },
].sort( (a,b) => b.val - a.val )

function Languages(props) {

    return <div style={{ display: "flex" }}>
        <Table caption="Programming languages"
            expand={props.displayGraphs} body={languages1} />
        <Table caption="Frameworks, servers and other tools"
            expand={props.displayGraphs} body={languages2} />
    </div>
}

export {Languages}