import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
      }
      state = {
          registerForm: false
      }
    registerForm = () => {
        this.setState({registerForm: true})
      };
      loginForm = () => {
        this.setState({registerForm: false})
      };
  render() {
    return (
      <div>
        <div className="pen-title">
            <h1>Login to Tasks Dashboard</h1>
        </div>
        <div className={"container" + (this.state.registerForm ? ' active' : '')}>
            <div className="card"></div>
            <div className="card">
                <h1 className="title">Login</h1>
                <form>
                    <div className="input-container">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label htmlFor="#{label}">Username</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label htmlFor="#{label}">Password</label>
                        <div className="bar"></div>
                    </div>
                    <div className="button-container">
                        <button>
                            <span>Go</span>
                        </button>
                    </div>
                    <div className="footer">
                        <a href="#">Forgot your password?</a>
                    </div>
                </form>
            </div>
            <div className="card alt">
                <div className="toggle" onClick={ this.registerForm }></div>
                <h1 className="title">Register
                    <div className="close" onClick={ this.loginForm }></div>
                </h1>
                <form>
                    <div className="input-container">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label htmlFor="#{label}">Username</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label htmlFor="#{label}">Password</label>
                        <div className="bar"></div>
                    </div>
                    <div className="input-container">
                        <input type="#{type}" id="#{label}" required="required" />
                        <label htmlFor="#{label}">Repeat Password</label>
                        <div className="bar"></div>
                    </div>
                    <div className="button-container">
                        <button>
                            <span>Next</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
