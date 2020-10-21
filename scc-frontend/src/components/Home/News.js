// RELATED NEWS

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './News.css'

class News extends Component {

    render() {
        return (
            <div className='newsDiv'>
                <div className='newsInDiv'>
                    <img src={this.props.img} style={{ 'width': '300px', 'height': '200px', 'border': '1px solid black' }} />
                    <div>
                        {this.props.title}
                    </div>
                    <div style={{'textAlign':'right','width':'100%','fontWeight':'bold'}}>
                        {this.props.date}
                    </div>
                </div>
            </div>
        );
    }

}

export default News;