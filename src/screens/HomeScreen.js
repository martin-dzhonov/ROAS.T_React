import React, { Component } from 'react';
import auth from '../utils/auth'
import '../css/home.css';
class HomeScreen extends Component {
  
    render() {
        return (
            <div>
                <div className="home-title">Welcome to ROAS.T test app<span className={auth.isAuthenticated ? 'home-message' : 'hidden'}>, {auth.currentUser()} </span>! </div>
            </div>
        )
    }
}

export default HomeScreen;