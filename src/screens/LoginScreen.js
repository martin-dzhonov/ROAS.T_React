import React, { Component } from 'react';
import auth from '../utils/auth';
import '../css/login.css'
class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      username:'',
      password:'',
      showError: false
      }
  }

  authenticate = (e) => {
    e.preventDefault();
      console.log(auth.currentUser());
    let currentComponent = this;

    var creds={
      "username":this.state.username,
      "password":this.state.password
    };

    auth.login(creds).then( result => {
        console.log(result);
      this.props.history.push('/profile');
   }, function(error) {
    console.log(error);
      currentComponent.setState({showError:true})
   });
  }  

  render() {
    return (
        <div className="login-page">
        <div className="form">
        <form className="login-form">
        <input type="text" 
            placeholder="username"
             onChange = {(event) => this.setState({username:event.target.value})}
             />
            <input type="password" 
               placeholder="password"
               onChange = {(event) => this.setState({password:event.target.value})}
            />
            <div className={this.state.showError ? 'error-message' : 'hidden'}> Invalid username/password.</div>
            <button onClick={this.authenticate}>Log In </button>
        </form>
            </div>
        </div>
        
      
    );
  }
}

export default LoginScreen;