// HOME PAGE
// DESC:        Landing page

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './HomePage.css';
// LOGOS IMPORT
import EVPassLogo from '../../assets/images/EVPassLogo.png';
import GogoroLogo from '../../assets/images/GogoroLogo.svg';
import GreenCarLogo from '../../assets/images/GreenCarLogo.png';
import KSTMobilityLogo from '../../assets/images/KSTMobilityLogo.png';
import RenaultLogo from '../../assets/images/RenaultLogo.png';
// CUSTOM COMPONENT IMPORTS
import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';
import RelatedNews from '../../components/Home/RelatedNews';
import Participants from '../../components/Home/Participants';
import Cooperation from '../../components/Home/Cooperation';
import Footer from '../../components/Footer/Footer';

class HomePage extends Component {

    // SERVICE PROVIDERS
    SPdata = [
        {
            logo: EVPassLogo,
            name: 'EV Pass',
        },
        {
            logo: GogoroLogo,
            name: 'Gogoro',
        },
        {
            logo: GreenCarLogo,
            name: 'Green Car',
        },
        {
            logo: KSTMobilityLogo,
            name: 'KST Mobility',
        },
        {
            logo: RenaultLogo,
            name: 'Renault',
        },
    ]

    render() {
        return (
            <div className='mainDiv'>
                <div className='bannerDiv'>
                    <div className='bannerInDiv'>
                        <div className='SPDiv'>
                            {this.SPdata.map((item) => {
                                return (
                                    <div style={{ 'padding': '10px' }}>
                                        <ServiceProvider logo={item.logo} name={item.name} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='titleDiv'>
                            <h1>탄소제로 Jeju e-3DA</h1>
                            <br />
                            제주 스마트시티 챌린지
                        </div>
                    </div>
                </div>
                {/* NEWS */}
                <RelatedNews />
                {/* PARTICIPANTS */}
                <Participants />
                {/* COOPERATION */}
                <Cooperation />
                {/* FOOTER */}
                <Footer />
            </div>
        );
    }
}

export default HomePage;