// PARTICIPANTS

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Participants.css';
// IMAGE IMPORTS
import dbscLogo from '../../assets/images/companies/dbsc.webp'
import gs from '../../assets/images/companies/gs.webp'
import img4 from '../../assets/images/companies/4.webp'
import img5 from '../../assets/images/companies/5.webp'
import img6 from '../../assets/images/companies/6.webp'
import img7 from '../../assets/images/companies/7.webp'
import img8 from '../../assets/images/companies/8.webp'
import img9 from '../../assets/images/companies/9.webp'
import img10 from '../../assets/images/companies/10.webp'
import img11 from '../../assets/images/companies/11.webp'
import img12 from '../../assets/images/companies/12.webp'

class Participants extends Component {

    data = [
        {
            img: dbscLogo
        },
        {
            img: gs
        },
        {
            img: img4
        },
        {
            img: img5
        },
        {
            img: img6
        },
        {
            img: img7
        },
        {
            img: img8
        },
        {
            img: img9
        },
        {
            img: img10
        },
        {
            img: img11
        },
        {
            img: img12
        },
    ]


    render() {
        return (
            <div className='partMain'>
                <div className='partIn'>
                    참여기관
                    <hr />
                    <div className='mapDiv'>
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

export default Participants;