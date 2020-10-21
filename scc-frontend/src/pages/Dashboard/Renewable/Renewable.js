// Renewable

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Renewable.css'
// RECHART IMPORTS
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
// AXIOS IMPORTS
import axios from 'axios'
// MATERIAL UI IMPORTS
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const COLORS = ['grey', 'white']

class Renewable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'solar',
            renewable: {},
            cumulative_power_generation: 0,
            facility_capacity: 0,
            co2_reduction: 0,
            drinking_water_effect: 0,
            current_output: 0,
            weekly_power_generation: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0
            },
            monthly_power_generation: {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0
            },
            data: []

        }
    }

    async componentDidMount() {
        await axios.get('/renewable/')
            .then((res) => {
                this.setState({
                    renewable: res.data,
                    ...res.data.solar
                })
            })
    }

    getCOData = () => {
        let temp = this.state.facility_capacity - this.state.current_output
        let data = [
            {
                name: 'Facility Capacity',
                value: temp
            },
            {
                name: 'Current Output',
                value: this.state.current_output
            },
        ]
        return data;
    }

    getWPGData = () => {
        let data = [
            {
                name: '1',
                power: this.state.weekly_power_generation[1]
            },
            {
                name: '2',
                power: this.state.weekly_power_generation[2]
            },
            {
                name: '3',
                power: this.state.weekly_power_generation[3]
            },
            {
                name: '4',
                power: this.state.weekly_power_generation[4]
            },
            {
                name: '5',
                power: this.state.weekly_power_generation[5]
            },
            {
                name: '6',
                power: this.state.weekly_power_generation[6]
            },
            {
                name: '7',
                power: this.state.weekly_power_generation[7]
            },
        ]
        return data;
    }


    getMPGData = () => {
        let data = [
            {
                name: '1',
                power: this.state.monthly_power_generation[1]
            },
            {
                name: '2',
                power: this.state.monthly_power_generation[2]
            },
            {
                name: '3',
                power: this.state.monthly_power_generation[3]
            },
            {
                name: '4',
                power: this.state.monthly_power_generation[4]
            },
            {
                name: '5',
                power: this.state.monthly_power_generation[5]
            },
            {
                name: '6',
                power: this.state.monthly_power_generation[6]
            },
            {
                name: '7',
                power: this.state.monthly_power_generation[7]
            },
            {
                name: '8',
                power: this.state.monthly_power_generation[8]
            },
            {
                name: '9',
                power: this.state.monthly_power_generation[9]
            },
            {
                name: '10',
                power: this.state.monthly_power_generation[10]
            },
            {
                name: '11',
                power: this.state.monthly_power_generation[11]
            },
            {
                name: '12',
                power: this.state.monthly_power_generation[12]
            },
        ]
        return data;
    }

    handleTypeChange = (e, val) => {
        e.preventDefault();
        this.setState({
            type: val,
            renewable: this.state.renewable,
            ...this.state.renewable[val]
        })
    }

    render() {
        return (
            <div className="renewableMain">
                <center>
                    <h1>
                        신재생에너지 대시보드
                    </h1>
                </center>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup row={true} aria-label="type" name="renewabletype" value={this.state.type} onChange={this.handleTypeChange}>
                        <FormControlLabel value="solar" control={<Radio style={{ 'color': 'white', '&$checked': { 'color': 'white' } }} />} label="Solar" />
                        <FormControlLabel value="wind" control={<Radio style={{ 'color': 'white', '&$checked': { 'color': 'white' } }} />} label="Wind" />
                    </RadioGroup>
                </FormControl>
                <table className='detailsTable'>
                    <tr>
                        <th>
                            누적발전량 <br /> 
                        </th>
                        <th>
                            설비용량
                        </th>
                        <th>
                            CO2 저감량
                        </th>
                        <th>
                            식수효과
                        </th>
                    </tr>
                    <tr>
                        <td>
                            {this.state.cumulative_power_generation} MWh
                        </td>
                        <td>
                            {this.state.facility_capacity} MW
                        </td>
                        <td>
                            {this.state.co2_reduction} tCO2
                        </td>
                        <td>
                            {this.state.drinking_water_effect} 그루
                        </td>
                    </tr>
                </table>
                <table className='chartTable'>
                    <tr>
                        <th>
                            현재출력 (MW)
                        </th>
                        <th>
                            주간 발전량(kwh)
                        </th>
                        <th>
                            월간발전량 (kwh)
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <PieChart width={200} height={250} onMouseEnter={this.onPieEnter}>
                                <Pie
                                    data={this.getCOData()}
                                    cx={100}
                                    cy={100}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                >
                                    {
                                        this.getCOData().map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                </Pie>
                                <text x={100} y={100} dy={10} textAnchor="middle" fill='white'>{this.state.current_output}</text>
                                <Legend />
                            </PieChart>
                        </td>
                        <td>
                            <BarChart width={400} height={300} data={this.getWPGData()}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }} barSize={10} >
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="power" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                        <td>
                            <BarChart width={450} height={300} data={this.getMPGData()}
                                margin={{ top: 5, right: 30, left: 30, bottom: 5 }} barSize={10}  >
                                <XAxis dataKey="name" stroke='white' />
                                <YAxis stroke='white' />
                                <Tooltip
                                    labelStyle={{ 'color': 'black' }}
                                    itemStyle={{ 'color': 'black' }}
                                    contentStyle={{ 'opacity': '0.8' }} />
                                <Bar dataKey="power" fill="white" animationDuration={1500} />
                            </BarChart>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Renewable;