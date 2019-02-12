import React from 'react'

function handleSubmit(password, username){
    fetch('https://apex.cc-west.de/ords/mbouchi/tasksapp/user', { 
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'username': `${username}`,
            'password': `${password}`
        }
    })
    .then(function(response) {
        return response.json()
    }).then(js => {
        console.log(js.items)
    });
}
export default function LoginForm(props) {
    return (
        <form>
            <div className="input-container">
                <input type="text" id="username" required="required" autoComplete="username"/>
                <label htmlFor="username">Username</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="password" id="password" required="required" autoComplete="current-password"/>
                <label htmlFor="password">Password</label>
                <div className="bar"></div>
            </div>
            <div className="button-container">
                <button onClick={handleSubmit.bind(this, '1230123', 'mbouchi')}>
                    <span>Go</span>
                </button>
            </div>
            <div className="footer">
                <a href="#">Forgot your password?</a>
            </div>
        </form>
    );
}
