import React from 'react'

function OtherProjects(props){
    return <div style={{display: "flex", flexDirection: "column", padding: "50px"}}>
        <h2>Other websites</h2>
        <p>Check out some other websites I have made:</p>
        <ul>
            <li>
                <a href="/calculator/index.html" style={{color: "#007bff", textDecoration: "none"}} >Calculator Application</a>
                <p>Create a new account and then login to use the calculator.</p>
                <p>The frontend was written once with React.
                    The backend was written 5 different times in: Tomcat + Java EE + MySQL; 
                    NodeJS + Express + MongoDB; 
                    Python + Flask + MySQL; Golang + MySQL; PHP + Apache2 + MySQL.
                    All implementations can be found on my github.
                </p>
            </li>
            <li>
                <a href="/bank/index.html" style={{color: "#007bff", textDecoration: "none"}} >Bank website</a>
                <p>Login as "administrator" with password ";_a(*7&yxhER3=f". View and create users and accounts.</p>
                <p>The frontend was written in React. The backend uses Java Servlets with Tomcat 9,
                    JDBC and PostgreSQL. Extensive testing with JUnit was done.
                    Github <a href="https://github.com/jackdawkins11/Revature-Bank-API"
                        style={{color: "#007bff", textDecoration: "none"}}>link</a>.
                </p>
            </li>
        </ul>
    </div>
}

export {OtherProjects}