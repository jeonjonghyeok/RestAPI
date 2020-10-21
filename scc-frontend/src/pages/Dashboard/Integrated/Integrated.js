// Integrated

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './Integrated.css'
// AXIOS IMPORTS
import axios from 'axios'

class Integrated extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // renewable: {
            //     cumulative_power_generation: 0,
            //     total_facility_capacity: 0,
            //     co2_reduction: 0,
            //     drinking_water_effect: 0,
            //     number_of_chargers_installed: 0,
            //     electricity_extraction_volume: 0
            // },
            // emobility: {
            //     members: 0,
            //     cumulative_ride: 0,
            //     electric_vehical_shared: 0,
            //     ecar_available: 0,
            //     ecar_unusable: 0,
            //     ecar_charging: 0,
            //     ecar_total: 0,
            //     ekickboard_available: 0,
            //     ekickboard_unusable: 0,
            //     ekickboard_charging: 0,
            //     ekickboard_total: 0
            // },
            renewabledata: [],
            emobilitydata: []
        }
    }

    async componentDidMount() {
        await axios.get('/renewable/integrated')
            .then((res) => {
                console.log("RENEWABLE: " + JSON.stringify(res.data))
                this.setState({ renewabledata: res.data });
            })
            .catch((err) => {
                alert(err);
            })
        await axios.get('/emobility/integrated')
            .then((res) => {
                console.log("EMOBILITY: " + JSON.stringify(res.data))
                this.setState({ emobilitydata: res.data });
            })
            .catch((err) => {
                alert(err);
            })
    }

    render() {
        return (
            <div className='integratedMain'>
                <center>
                    <h1>
                        e-3DA 통합 대시보드
                    </h1>
                </center>
                <div className='dataTables'>
                    <table className='renewableTable'>
                        <tr>
                            <th colSpan='2'>신재생에너지</th>
                        </tr>
                        {/* 1st SECTION */}
                        <tr>
                            <th>
                                누적 발전량(풍력/태양광)
                            </th>
                            <th>
                                총 설비 용량(풍량/태양광)
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewabledata.cumulative_power_generation} MWh
                            </td>
                            <td>
                                {this.state.renewabledata.total_facility_capacity} MW
                            </td>
                        </tr>
                        {/* 2nd SECTION */}
                        <tr>
                            <th>
                                CO2 저감량<br />(풍량/태양광)
                            </th>
                            <th>
                                식수효과<br />(풍량/태양광) 
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewabledata.co2_reduction} tCO2
                            </td>
                            <td>
                                {this.state.renewabledata.drinking_water_effect} 그루
                            </td>
                        </tr>
                        {/* 3rd SECTION */}
                        <tr>
                            <th>
                                충전기 설치 수 <br /> (EV 충전기)
                            </th>
                            <th>
                                전기 추출량<br />(ESS)    
                            </th>
                        </tr>
                        <tr>
                            <td>
                                {this.state.renewabledata.number_of_chargers_installed}
                            </td>
                            <td>
                                {this.state.renewabledata.electricity_extraction_volume} KW
                            </td>
                        </tr>
                    </table>
                    <div style={{ 'width': '3px', 'backgroundColor': 'white', 'height': '100%' }} />
                    <div className='emobilityTables'>
                        <table className='summaryTable'>
                            <tr>
                                <th colSpan='3'>
                                    요약현향
                                </th>
                            </tr>
                            <tr>
                                <th>
                                     회원수 
                                </th>
                                <th>
                                    누적 탑승 횟수
                                </th>
                                <th>
                                    전기차 공유 대수
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.emobilitydata.members} 명
                                </td>
                                <td>
                                    {this.state.emobilitydata.cumulative_ride} 회
                                </td>
                                <td>
                                    {this.state.emobilitydata.electric_vehical_shared} 대
                                </td>

                            </tr>
                        </table>
                        <table className='availabilityTable'>
                            <tr>
                                <th colSpan='3'>
                                    가용현황
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th>
                                    전기차
                                </th>
                                <th>
                                    전동킥보드
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    가용
                                </td>
                                <td>
                                    {this.state.emobilitydata.ecar_available}
                                </td>
                                <td>
                                    {this.state.emobilitydata.ekickboard_available}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    비가용
                                </td>
                                <td>
                                    {this.state.emobilitydata.ecar_unusable}
                                </td>
                                <td>
                                    {this.state.emobilitydata.ekickboard_unusable}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    충전중
                                </td>
                                <td>
                                    {this.state.emobilitydata.ecar_charging}
                                </td>
                                <td>
                                    {this.state.emobilitydata.ekickboard_charging}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    전체
                                </td>
                                <td>
                                    {this.state.emobilitydata.ecar_total}
                                </td>
                                <td>
                                    {this.state.emobilitydata.ekickboard_total}
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        );
    }

}

export default Integrated;