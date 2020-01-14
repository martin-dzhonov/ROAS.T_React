import React, { Component } from 'react';
import {Link,NavLink, withRouter} from 'react-router-dom';
import auth from '../utils/auth';
import '../index.css';
import '../css/header.css';
class Header extends Component {
  
    constructor(props) {
        super(props);
    }
    
    logout = () => {
        auth.logout(() => {
          this.props.history.push('/home');
        })
    }
    
    render() {
        return (

            <div>
                <header className="header-basic-light">
                    <div className="header-limiter">
                    <h1 className="navbar-logo">CompanyLogo</h1>
                    <nav className="navbar-list">
                    <NavLink to="/home" className="navbar-item" activeClassName="navbar-active">Home</NavLink>
                    <NavLink to="/contacts" className="navbar-item" activeClassName="navbar-active">Contacts</NavLink>
                    <NavLink to="/profile" className="navbar-item" activeClassName="navbar-active">Profile</NavLink>
                    <NavLink to="/login" className={auth.isAuthenticated ? 'hidden ' : 'navbar-item navbar-login'} >Log In</NavLink>
                    <NavLink to="/home" className={auth.isAuthenticated ? 'navbar-item navbar-login' : 'hidden'} onClick={this.logout}>Log Out</NavLink>
                    </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default withRouter(Header);