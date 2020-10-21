// SIDENAV

// REACT IMPORTS
import React, { Component } from 'react';
// ROUTER IMPORTS
import { Link } from 'react-router-dom';
// SIDEBAR IMPORTS
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// ICON iMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faChartPie, faLeaf, faBolt } from '@fortawesome/free-solid-svg-icons'

class SideNav extends Component {

    render() {
        return (
            <ProSidebar className='sideBar'>
                <Menu iconShape="square">
                    <MenuItem icon={<FontAwesomeIcon icon={faLightbulb} size='2x' />}>
                        <Link to='/dashboard/insights'>

                            인사이트
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faChartPie} size='2x' />}>
                        <Link to='/dashboard/integrated'>

                            통합 데시보드
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faLeaf} size='2x' />}>
                        <Link to='/dashboard/renewable'>
                            신재생에너지
                        </Link>
                    </MenuItem>
                    <MenuItem icon={<FontAwesomeIcon icon={faBolt} size='2x' />}>
                        <Link to='/dashboard/emobility'>
                            E-모빌리티
                        </Link>
                    </MenuItem>
                </Menu>
            </ProSidebar>
        );
    }

}

export default SideNav;