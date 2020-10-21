// EMOBILITY

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Emobility.css';
// RECHART IMPORTS
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
// AXIOS IMPORTS
import axios from 'axios';

const COLORS = ['white', 'grey']

class Emobility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // cumulative_ride: 0,
            // electric_vehical_shared: 0,
            // parking_are_reduction: 0,
            // renewable_energy_consumption: 0,
            // traffic_sharing_rate: 0,
            // greego: 0,
            // drt: 0,
            // twizy: 0,
            // un1: 0,
            // un2: 0,
            // un3: 0,
            emobilitys: []
        }
    }

    async componentDidMount() {
        await axios.get('/emobility/')
            .then((res) => {
                this.setState({
                    emobilitys: res.data
                })
            })
            .catch((err) => {

            })
    }

    getTSData = () => {
        let temp = 100 - this.state.emobilitys.traffic_sharing_rate
        let data = [
            {
                name: 'E-모빌리티',
                value: this.state.emobilitys.traffic_sharing_rate
            },
            {
                name: '전체통행량',
                value: temp
            },
        ]
        return data;
    }

    getMData = () => {
        let data = [
            {
                name: 'Greego',
                members: this.state.emobilitys.greego
            },
            {
                name: 'DRT',
                members: this.state.emobilitys.drt
            },
            {
                name: '마카롱택시',
                members: this.state.emobilitys.un1
            },
            {
                name: 'Twizy',
                members: this.state.emobilitys.twizy
            },
            {
                name: 'EVPass',
                members: this.state.emobilitys.un2
            },
            {
                name: '그린카',
                members: this.state.emobilitys.un3
            },
        ]
        return data;
    }


    render() {
        return (
            <div className="emobMain">
                <center>
                    <h1>
                        E-Mobility 대시보드
                    </h1>
                </center>
                <table className='chartTable'>
                    <tr>
                        <th>
                            통행 분담률
                        </th>
                        <th>
                            서비스 별 회원수
                        </th>
                        <th>
                            기타 현황
                        </th>
                    </tr>
                    <tr>
                        <td rowSpan='9'>
                            <PieChart width={200} height={250} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={this.getTSData()}
                                    cx={100}
                                    cy={100}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                >
                                    {
                                        this.getTSData().map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <text x={100} y={100} dy={10} textAnchor="middle" fill='white'>{this.state.emobilitys.traffic_sharing_rate}%</text>
                                <Legend />
                            </PieChart>
                        </td>
                        <td rowSpan='9'>
                            <BarChart width={500} height={300} data={this.getMData()}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={10}
                                style={{ 'fontSize': '10px' }}>
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="members" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            누적 탑승횟수
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.emobilitys.cumulative_ride}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            전기차 공유대수
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.emobilitys.electric_vehical_shared}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            주차 면 감축효과
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.emobilitys.parking_are_reduction}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            신재생에너지 사용량
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.emobilitys.renewable_energy_consumption}
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Emobility;