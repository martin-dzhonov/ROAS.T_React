import React, { Component } from 'react';
import axios from 'axios';
import Contact from '../components/Contact'
import Modal from '../components/Modal'
import '../css/contacts.css'
class ContactsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            popupOpen: false,
            currentContact: {}
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }


    componentWillMount() {

        let currentComponent = this;

        axios.get('http://localhost:3000/api/v1/contacts')
            .then(function (response) {
                console.log(response)
                if (response.status == 200) {
                    currentComponent.setState({ contacts: response.data.data })
                } else {
                    //console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showModal = (item) => {
        this.setState({
            currentContact: item,
            show: true
        });
    }

    hideModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-table">
                            <div className="table">
                                <div className="row header">
                                    <div className="cell">
                                        Name
							        </div>
                                    <div className="cell">
                                        Email
							        </div>
                                    <div className="cell">
                                        Phone
							        </div>
                                    <div className="cell">
                                        Zip
							        </div>
                                </div>
                                {this.state.contacts.map((el, index) => {
                                    return <Contact key={index} contact={el} showModal={() => this.showModal(el)} />;
                                }, this)}
                            </div>
                    </div>
                    <Modal show={this.state.show} contact={this.state.currentContact} hideModal={() => this.hideModal()}/>
                </div>
            </div>

        )
    }
}

export default ContactsScreen;