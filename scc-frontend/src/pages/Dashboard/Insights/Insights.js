// INSIGHTS

// REACT IMPORTS
import React, { Component } from 'react';
// MAPBOX IMPORTS
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
// STYLESHEET
import './Insights.css';
// IMAGE IMPORTS
import solar from '../../../assets/images/map/solar.png';
import wind from '../../../assets/images/map/wind.png';
import smarthub from '../../../assets/images/map/smart_hub.png';
import smartshelter from '../../../assets/images/map/smart_shelter.png';
import windsolar from '../../../assets/images/map/wind_solar.png';
import drt from '../../../assets/images/map/drt.png';
// RECHART IMPORTS
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
// AXIOS IMPORTS
import axios from 'axios';

const icons = {
    'solar': solar,
    'wind': wind,
    'smart_hub': smarthub,
    'smart_shelter': smartshelter,
    'wind_solar': windsolar,
    'drt': drt
}
// const viewpoint = {
//     'jungmun': {
//         latitude: 33.251292,
//         longitude: 126.431457,
//         type: 'smarthub'
//     },
//     'sinchang': {
//         latitude: 33.343849,
//         longitude: 126.185533,
//         type: 'windy'
//     },
//     'seogwi': {
//         latitude: 33.254219,
//         longitude: 126.560119,
//         type: 'smarthub'
//     },
//     'gashiri': {
//         latitude: 33.421396,
//         longitude: 126.685626,
//         type: 'wind_solar'
//     },
//     'haengwon': {
//         latitude: 33.529681,
//         longitude: 126.789599,
//         type: 'wind_solar'
//     },
//     'shelter': {
//         latitude: 33.465554,
//         longitude: 126.933859,
//         type: 'smart_shelter'
//     },
//     'publicfacilities': {
//         latitude: 33.447039,
//         longitude: 126.508976,
//         type: 'solar'
//     },
//     'drt': {
//         latitude: 33.408321,
//         longitude: 126.266246,
//         type: 'smarthub'
//     },
// }

class Insights extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoveritem: null,
            viewport: {
                width: '80vw',
                height: '80vh',
                latitude: 33.379657,
                longitude: 126.549879,
                zoom: 10
            },
            keyinsights: {
                monthly: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                total_power_generation: 0,
                co2_reduction: 0,
                reduction_power_rate_previous_year: 0,
                power_surplus_2019: 0,
                power_surplus_2020: 0,
                emobility_user: 0,
                renewable_enery_consuption: 0
            },
            data: []
            // data: {
            //     jungmun: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.251292,
            //         longitude: 126.431457,
            //         type: 'smarthub'
            //     },
            //     sinchang: {
            //         mpowergenaration: 0,
            //         msurplus: 0,
            //         mco2reduction: 0,
            //         latitude: 33.343849,
            //         longitude: 126.185533,
            //         type: 'windy'
            //     },
            //     seogwi: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.254219,
            //         longitude: 126.560119,
            //         type: 'smarthub'
            //     },
            //     gashiri: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.421396,
            //         longitude: 126.685626,
            //         type: 'wind_solar'
            //     },
            //     haengwon: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.529681,
            //         longitude: 126.789599,
            //         type: 'wind_solar'
            //     },
            //     shelter: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.465554,
            //         longitude: 126.933859,
            //         type: 'smart_shelter'
            //     },
            //     publicfacilities: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.447039,
            //         longitude: 126.508976,
            //         type: 'solar'
            //     },
            //     drt: {
            //         musers: 0,
            //         mcharge: 0,
            //         mco2reduction: 0,
            //         latitude: 33.408321,
            //         longitude: 126.266246,
            //         type: 'smarthub'
            //     }
            // }
        };
        
    }

    componentDidMount() {
        axios.get('/insight/')
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                alert(err);
            });

        axios.get('/insight/keyinsight/')
            .then((res) => {
                console.log('RESPONSE: ' + JSON.stringify(res.data))
                this.setState({
                    keyinsights: res.data
                })
            })
            .catch((err) => {
                alert(err);
            });
    }



    getMData = () => {
        let data;
        data = [
            {
                name: '1',
                power: this.state.keyinsights.monthly[0]
            },
            {
                name: '2',
                power: this.state.keyinsights.monthly[1]
            },
            {
                name: '3',
                power: this.state.keyinsights.monthly[2]
            },
            {
                name: '4',
                power: this.state.keyinsights.monthly[3]
            },
            {
                name: '5',
                power: this.state.keyinsights.monthly[4]
            },
            {
                name: '6',
                power: this.state.keyinsights.monthly[5]
            },
            {
                name: '7',
                power: this.state.keyinsights.monthly[6]
            },
            {
                name: '8',
                power: this.state.keyinsights.monthly[7]
            },
            {
                name: '9',
                power: this.state.keyinsights.monthly[8]
            },
            {
                name: '10',
                power: this.state.keyinsights.monthly[9]
            },
            {
                name: '11',
                power: this.state.keyinsights.monthly[10]
            },
            {
                name: '12',
                power: this.state.keyinsights.monthly[11]
            },
        ]
        return data;
    }

    render() {
        return (
            <div className="InsightsMain">
                <div className='map'>
                    <div className='keyInsights'>
                        <table>
                            <tr>
                                <th>월간 잉여 전력 감소율</th>
                            </tr>
                            <tr>
                                <td>
                                    <BarChart width={300} height={100} data={this.getMData()}
                                        margin={{ top: 5, right: 0, left: -35, bottom: -10 }}
                                        barSize={10} >
                                        <XAxis dataKey="name" stroke='grey' />
                                        <YAxis stroke='grey' />
                                        <Tooltip
                                            labelStyle={{ 'color': 'black' }}
                                            itemStyle={{ 'color': 'black' }}
                                            contentStyle={{ 'opacity': '0.8' }} />
                                        <Bar dataKey="power" fill="grey" />
                                    </BarChart>
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>총 발전량: </th>
                                <td>{this.state.keyinsights.total_power_generation}</td>
                            </tr>
                            <tr>
                                <th>CO2 감소량: </th>
                                <td>{this.state.keyinsights.co2_reduction}</td>
                            </tr>
                            <tr>
                                <th>잉여전력 전년대비 감소율: </th>
                                <td>{this.state.keyinsights.reduction_power_rate_previous_year}</td>
                            </tr>
                            <tr>
                                <th>2019년 잉여전력 :  </th>
                                <td>{this.state.keyinsights.power_surplus_2019}</td>
                            </tr>
                            <tr>
                                <th>2020년 잉여전력:  </th>
                                <td>{this.state.keyinsights.power_surplus_2020}</td>
                            </tr>
                            <tr>
                                <th>e-모빌리티 이용자 수:  </th>
                                <td>{this.state.keyinsights.emobility_user}</td>
                            </tr>
                            <tr>
                                <th>신재생에너지 사용량: </th>
                                <td>{this.state.keyinsights.renewable_enery_consuption}</td>
                            </tr>
                        </table>
                    </div>
                    <ReactMapGL
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                        mapStyle="mapbox://styles/dbsmartcity/ckghil50y0s1f19qwozst4mwa"
                        {...this.state.viewport}
                        onViewportChange={(viewport) => this.setState({ viewport })}
                    >
                        {/* MARKERS */}
                        {this.state.data.map((item) => {
                            return (
                                <div>
                                    <Marker
                                        latitude={item.lat}
                                        longitude={item.lng}>
                                        <img
                                            src={icons[item.type]}
                                            onMouseOver={() => { this.setState({ hoveritem: item }) }}
                                            onMouseLeave={() => { this.setState({ hover: false }) }} />
                                    </Marker>
                                </div>
                            );
                        })}

                        {this.state.hoveritem
                            ? <Popup
                                className='popup'
                                closeButton={false}
                                offsetLeft={60}
                                latitude={this.state.hoveritem.lat}
                                longitude={this.state.hoveritem.lng}>
                                <div className='popupMain'>
                                    <div className='title'>
                                        {this.state.hoveritem.title}
                                    </div>
                                    <div className='details'>
                                        <ul>
                                            {this.state.hoveritem.details.map((detail) => {
                                                return (
                                                    <li style={{ 'fontSize': '10px' }}>
                                                        {detail}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </Popup>
                            : null}
                        {/* POPUP BOXES */}
                        {/* {this.state.data.map((item) => {
                            return (
                                <Popup
                                    className='popup'
                                    closeButton={false}
                                    offsetLeft={60}
                                    latitude={item.lat}
                                    longitude={item.lng}>
                                    <div className='popupMain'>
                                        <div className='title'>
                                            {item.title}
                                        </div>
                                        <div className='details'>
                                            <ul>
                                                {item.details.map((detail) => {
                                                    return (
                                                        <li>
                                                            {detail}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Popup>
                            );
                        })} */}
                    </ReactMapGL>
                    <div className='legendMain'>
                        <table>
                            <tr>
                                <th colSpan='4'> <center>범례</center></th>
                            </tr>
                            <tr>
                                <td>
                                    <img src={solar} height="50px" />
                                </td>
                                <td>
                                    태양광 발전단지
                                </td>
                                <td>
                                    <img src={smarthub} height="50px" />
                                </td>
                                <td>
                                    스마트허브
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={wind} height="50px" />
                                </td>
                                <td>
                                    풍력 발전단지
                                </td>
                                <td>
                                    <img src={smartshelter} height="50px" />
                                </td>
                                <td>
                                    스마트쉘터
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={drt} height="50px" />
                                </td>
                                <td>
                                    수요응답형 <br /> 셔틀버스
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Insights;