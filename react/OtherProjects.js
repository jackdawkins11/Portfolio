import React from 'react'

function OtherProjects(props){
    return <div style={{display: "flex", flexDirection: "column", padding: "50px"}}>
        <h2>Other websites</h2>
        <p>Check out some other websites I have made:</p>
        <ul>
            <li>
                <a href="/calculator/index.html" style={{color: "#007bff", textDecoration: "none"}} >Calculator Application</a>
                <p>Create a new account and then login to use the calculator.</p>
            </li>
            <li>
                <a href="/bank/index.html" style={{color: "#007bff", textDecoration: "none"}} >Bank website</a>
                <p>Login as "administrator" with password ";_a(*7&yxhER3=f". View and create users and accounts.</p>
            </li>
        </ul>
    </div>
}

export {OtherProjects}