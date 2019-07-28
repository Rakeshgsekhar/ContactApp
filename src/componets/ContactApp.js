import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import { withLoading } from "./withLoading";


const WrapperClass = withLoading('contacts')(ContactList);
export default class ContactsApp extends Component {
  
    constructor(props){
        super(props)

        this.state = {filterText:''};
    }

    handleUserInput=(searchTerm)=>{
        this.setState({
            filterText:searchTerm
        })
    }

    
    
  
    render() {

        const contacts = this.props.contacts;
        const handleDelete = this.props.handleDelete;
    return (
        <div className="contactApp">
          <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput}/>

        <WrapperClass contacts={contacts} filterText={this.state.filterText} handleDelete={handleDelete}/>
      </div>
    )
  }
}
