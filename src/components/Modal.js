import React, { Component } from 'react';
import '../css/modal.css'
import avatar from '../avatar.png';
import close from '../close.png';
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }


    render() {
      if (!this.props.show) {
        return null;
      }
      return (
      <div className='modal-container'>
          <div class='slide'>
            <img src={close} className="close-button" onClick={() => this.props.hideModal()} />
           <div className="modal-row">
               <div className="avatar-container"><img src={avatar} className="avatar" alt="avatar" /></div>
          </div>
          <div className="modal-row">
              <div className="modal-title" onClick={ this.hideModal }>{this.props.contact.name}</div>
          </div>
          <div className="modal-content">
            <div className="modal-content-row">
                <div className="modal-content-title">Name</div>
                <div className="modal-content-text">{this.props.contact.name}</div>
            </div>
            <div className="modal-content-row">
                <div className="modal-content-title">Email</div>
                <div className="modal-content-text">{this.props.contact.email}</div>
            </div>
            <div className="modal-content-row">
                <div className="modal-content-title">Phone</div>
                <div className="modal-content-text">{this.props.contact.phone}</div>
            </div>
            <div className="modal-content-row">
                <div className="modal-content-title">Zip</div>
                <div className="modal-content-text">{this.props.contact.zip}</div>
            </div>
          </div>
          </div>
      </div>
      );
    }
  }