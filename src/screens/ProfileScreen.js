import React, { Component } from 'react';
import '../css/profile.css'
import auth from '../utils/auth'

class ProfileScreen extends Component {
  
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="profile-title">Profile</div>
                    <div className="content-row">
                    <div className="content-key">
                        Name
                    </div>
                    <div className="content-value">
                        {auth.currentUser()}
                    </div>  
                    </div> 
                </div>
            </div>
        )
    }
}

export default ProfileScreen;