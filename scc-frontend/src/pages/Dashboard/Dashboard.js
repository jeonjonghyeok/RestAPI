// DASHBOARD

// REACT IMPORTS
import React, { Component } from 'react';
// SIDENAV IMPORT
import SideNav from '../../components/SideNav/SideNav';
// STYLESHEET
import './Dashboard.css'
// TAB IMPORTS
import Insights from './Insights/Insights';
import Integrated from './Integrated/Integrated';
import Renewable from './Renewable/Renewable';
import Emobility from './Emobility/Emobility';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: this.props.match.params.tab
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            tab: newProps.match.params.tab
        })
    }

    renderComponent = (tab) => {
        if (tab == 'insights') {
            return (<Insights />);
        }
        else if (tab == 'integrated') {
            return (<Integrated />);
        }
        else if (tab == 'renewable') {
            return (<Renewable />);
        }
        else if (tab == 'emobility') {
            return (<Emobility />);
        }
    }

    render() {

        return (
            <div className='DashMain'>
                <SideNav />
                {this.renderComponent(this.state.tab)}
            </div>
        );
    }

}

export default Dashboard;