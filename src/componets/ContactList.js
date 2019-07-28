import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponentBtn from './ComponentBtn'
import Model from './Model'




export default class ContactList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editData: false,
      edContact: ''
    }

    this.handleonClick = this.handleonClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  filterContact = (contacts, filterText) =>
    contacts.filter(contact => {
      return contact.name.indexOf(filterText) !== -1
    })

  /**Open up Edit Flex box */
  handleonClick(contact) {
    let i = 1;
    const flag = this.state.editData;
    console.log(flag);
    this.setState({ editData: !flag })
    this.setState({ edContact: contact })

  }

  handleOnClose() {
    this.closeFlex()
  }

  /***Clossing flex box Modal */
  closeFlex() {
    const close = this.state.editData;
    console.log(close)
    this.setState({ editData: !close })

  }

  /***This function is to handle onSubmit of updateing the contact. */
  handleOnSubmit(newName, newEmail) {
    const edtCnt = this.state.edContact;
    console.log(edtCnt)
    console.log(newName)

    const updcontacts = this.props.contacts;
    updcontacts.forEach(contact => {
      if (contact.email === edtCnt.email) {
        contact.name = newName;
        contact.email = newEmail;
      }

    });
    this.setState({ contacts: updcontacts })

    this.closeFlex();
  }


  /**Show Editing flex Box */
  dispEdit() {
    if (this.state.editData) {
      return <Model contact={this.state.edContact} handleOnClose={this.handleOnClose} handleOnSubmit={this.handleOnSubmit} />
    }
  }



  render() {
    let { contacts, filterText, handleDelete } = this.props;
    console.log(this.props)
    return (
      <ul className="ul">
        {this.filterContact(contacts, filterText)
          .map((contact) => <li className="li" key={contact.email} >
            <img className="img" src={contact.thumbnail} role="presentation" />

            <div className="contactData">
              <strong>{contact.name}
              </strong><button class="btn" onClick={() => handleDelete(contact.email, contacts)}><i class="fa fa-trash"></i></button>
              <br /><small>{contact.email}</small><button class="btn" onClick={() => this.handleonClick(contact)}><i class="fa fa-edit"></i></button>


            </div>



          </li>

          )
        }
        <div>
          {this.dispEdit()}
        </div>
      </ul>


    )
  }
}



