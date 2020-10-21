// SERVICE PROVIDER
// DESC:        Component for a single Service Provider

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './ServiceProvider.css'

class ServiceProvider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainDiv'>
                <div className='inDiv'>
                    <img src={this.props.logo} alt={this.props.name} style={{ 'height': '5vh' }} />
                    {/* <img src={this.props.productImg} alt={this.props.productName}/> */}
                    <br/>
                    <input type="button" value="GO" className='bttn'/>
                </div>
            </div>
        );
    }

}

export default ServiceProvider;