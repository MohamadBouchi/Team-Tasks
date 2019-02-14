import React from 'react'

function LoginForm(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.login(e.target.username.value, e.target.password.value);
      }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input name="username" type="text" id="username" required="required" autoComplete="username"/>
                <label htmlFor="username">Username</label>
                <div className="bar"></div>
            </div>
            <div className="input-container">
                <input type="password" id="password" required="required" name="password" autoComplete="current-password"/>
                <label htmlFor="password">Password</label>
                <div className="bar"></div>
            </div>
            <div className="button-container">
                <button type="submit">
                    <span>Go</span>
                </button>
            </div>
            <div className="footer">
                <a href="/">Forgot your password?</a>
            </div>
        </form>
    );
}

export default LoginForm;