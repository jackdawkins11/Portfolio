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
                <p>Login as "employee" with password "dewjdjewfn". View users and accounts and create new accounts.</p>
            </li>
        </ul>
    </div>
}

export {OtherProjects}