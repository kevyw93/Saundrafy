import React from "react";
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 'username': "", 'password': "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user: user});
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = {'username':'kevin', 'password':'password'};
    const username = {
      strings: [user.username],
      typeSpeed: 30
    };
    const password = {
      strings: [user.password],
      typeSpeed: 30
    };
    this.setState({
      typeUsername: setTimeout(() => {
        new Typed('.username-input', username);
      }, 400),
      typedPassword: setTimeout(() => {
        new Typed('.password-input', password);
      },400),
      typeSubmit: setTimeout(() => {
        this.props.login({user:user});
      },900)
    });
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  render() {

    let loadpage;
    let sign = <Link to="/signup">SIGN UP</Link>;
    let butt = 'LOG IN';
    let buttonholder = "Don't have an account?";
    let creds;
    if (this.props.errors.creds && (this.state.username.length > 0 && this.state.password.length > 0)) {
      creds = <h1 className="top-error">{this.props.errors.creds}</h1>;
    }


    return (
      <div className="form-container">

        <h1 className="login-logo">Ampafy</h1>

      <form className="form" onSubmit={this.handleSubmit}>
          {creds}
          <div className="input-container">
          <input className="username-input" type="text" value={this.state.username} placeholder={'Username'} onChange={this.handleChange("username")} />
          <br/>
          <h1 className="errors">{this.props.errors.username}</h1>

          <br/>

          <input className="password-input" type="password" value={this.state.password}  placeholder={'Password'} onChange={this.handleChange("password")} />
          <br />
          <h1 className="errors">{this.props.errors.password}</h1>

          </div>
          <br />

          <button className="login-signup-button">{butt}</button>
          <br />
        <button className="guest-signin-button" onClick={this.handleGuestLogin} >GUEST LOGIN</button>
          <br />
          <h1 className="form-bot">{buttonholder} {sign} </h1>
        </form>
      </div>
    );
  }
}

export default SessionForm;
