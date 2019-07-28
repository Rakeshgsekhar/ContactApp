import React, { Component } from 'react'

export default class ComponentBtn extends Component {
    
    constructor(props){
        super(props)
        const eemail='';
        const ename='';
    }
    
    render() {
       
        let {contact} = this.props;
       // console.log(this.props);
        return (
            
       
                <ul>
                <li className="li" key={contact.email}>
                <img className="img" src={contact.thumbnail} role="presentation"/>
            
            <div className="contactData">
                <input type = "text" placeholder={contact.name} value={ename} />
                    <br/><input type = "text" placeholder={contact.email} value ={eemail}/>                
            </div>
            <button class="btn" onClick={()=>handleUpdate(ename,email,contact.email)}><i class="fa fa-save"></i></button>
          </li>
          </ul>
          
        )
    }
}
