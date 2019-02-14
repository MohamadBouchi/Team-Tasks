import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import './login.css';
import RegisterForm from '../../components/auth/RegisterForm';
import { login } from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
      registerForm: false
  }
  registerForm = () => {
    this.setState({registerForm: true})
  };
  loginForm = () => {
    this.setState({registerForm: false})
  };

  login = (user_name, password) => {
    this.props.login(user_name, password);
  }

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
              <LoginForm login={this.login}></LoginForm>
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

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user_name, password) => dispatch(login(user_name, password))
  }
}

const mapStateToProps = (state) => {
  return {
      user_name: state.user_name
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);