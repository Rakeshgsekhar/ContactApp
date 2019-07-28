import React,{Component} from "react";
import ContactApp from "./componets/ContactApp";
import './index.css'




export default class App extends Component {
  
    constructor(props){
        super(props)

        this.state={contacts:[]}
    }


  componentDidMount(){
      fetch("https://uinames.com/api/?amount=50&region=Australia&ext")
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.map(user=>(
        {
        name : `${user.name}${user.surname}`,
        email : user.email,
        thumbnail : user.photo
        }
      ))).then(contacts=>this.setState({contacts}));
  }

  handleDelete=(email,contacts)=>{

    let i=0;
    console.log(email)
    let newContacts = contacts.filter((contact)=>{
      return contact.email !== email
    })

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    
    return (

        <div className="App">
            <ContactApp contacts = {this.state.contacts} handleDelete={this.handleDelete} />
        </div>
       
    )
  }


}
