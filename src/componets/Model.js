import React, { Component } from 'react'

export default class Model extends Component {

    constructor(props){
        super(props);
        this.state={
            ename : '',
            eemail : ''
        }   
    }
    onChangeHandle=(event)=>{
        this.setState({[event.target.name] :event.target.value});

    }

    componentDidMount(){
        let {contact} = this.props;
        this.setState({ename:contact.name,eemail:contact.email})
    }

    render() {
        
        let {contact,handleOnClose,handleOnSubmit} = this.props;
        console.log(this.props)
        return (
            <div class="bg-modal" style={{display:"flex"}}>
	        <div class="modal-contents">

		        <div class="close" onClick={handleOnClose} >+</div>
                <img className="img" src={contact.thumbnail} role="presentation"/>

		        <form>
			    <input type="text" placeholder={this.state.ename} onChange={this.onChangeHandle} name="ename" />
			    <input type="email" placeholder={this.state.eemail} onChange={this.onChangeHandle} name="eemail"/>
			    <a onClick={()=>handleOnSubmit(this.state.ename,this.state.eemail)} class="button">Submit</a>
		    </form>

	    </div>
    </div>
        )
    }
}
