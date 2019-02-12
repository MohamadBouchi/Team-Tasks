import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import './login.css';
import RegisterForm from '../../components/auth/RegisterForm';

export default class Login extends React.Component {
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
              <LoginForm></LoginForm>
            </div>
            <div className="card alt">
              <div className="toggle" onClick={ this.registerForm }></div>
              <h1 className="title">Register
                  <div className="close" onClick={ this.loginForm }></div>
              </h1>
              <RegisterForm></RegisterForm>
            </div>
        </div>
      </div>
    );
  }
}
