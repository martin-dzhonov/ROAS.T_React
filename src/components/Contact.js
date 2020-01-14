import React, { Component } from 'react';
import '../css/contacts.css'

class Contact extends Component {

    constructor(props){
        super(props);
    }
  
    render() {
        return (
            <div className="row" onClick={() => this.props.showModal(this.props.contact)}>
                                    <div className="cell" data-title="name">
                                    {this.props.contact.name}
							</div>
                                    <div className="cell" data-title="email">
                                    {this.props.contact.email}
							</div>
                            <div className="cell" data-title="phone">
                                    {this.props.contact.phone}
							</div>
                            <div className="cell" data-title="zip">
                                    {this.props.contact.zip}
							</div>
            </div>
        )
    }
}

export default Contact;