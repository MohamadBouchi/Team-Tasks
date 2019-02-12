import React from 'react'

export default function RegisterForm() {
  return (
      <form>
        <div className="input-container">
            <input type="text" id="registerUsername" required="required" autoComplete="username"/>
            <label htmlFor="registerUsername">Username</label>
            <div className="bar"></div>
        </div>
        <div className="input-container">
            <input type="password" id="registerPassword" required="required" autoComplete="current-password"/>
            <label htmlFor="registerPassword">Password</label>
            <div className="bar"></div>
        </div>
        <div className="input-container">
            <input type="password" id="repeatPassword" required="required" autoComplete="new-password"/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <div className="bar"></div>
        </div>
        <div className="button-container">
            <button>
                <span>Next</span>
            </button>
        </div>
    </form>
  )
}
