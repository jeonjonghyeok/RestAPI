// COOPERATION

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Cooperation.css';
// IMAGE IMPORTS
import img1 from '../../assets/images/cooperations/1.webp'
import img2 from '../../assets/images/cooperations/2.webp'
import img3 from '../../assets/images/cooperations/3.webp'
import img4 from '../../assets/images/cooperations/4.webp'

class Cooperation extends Component {

    data = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        }
    ]


    render() {
        return (
            <div className='coopMain'>
                <div className='coopIn'>
                    참여기관
                    <hr />
                    <div className='coopMapDiv'>
                        {this.data.map((item) => {
                            return (<div style={{ 'padding': '10px' }}>
                                <img src={item.img} style={{'height': '50px'}}/>
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Cooperation;