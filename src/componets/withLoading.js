import React from 'react'
import isEmpty from 'lodash/isEmpty'

export const withLoading =  (property) => (ChildComponent)=>{
    return class LoadingHOC extends React.Component{

        render(){
            return isEmpty(this.props[`${property}`])?(

                <div className ="d-flex justify-content-center">
                
                <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
                </div>
        </div>
            ):(
               
                <ChildComponent {...this.props}/>
              
            
            );
        };
    };
        
    
};