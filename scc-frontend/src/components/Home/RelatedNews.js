// RELATED NEWS

// REACT IMPORTS
import React, { Component } from 'react';
// STYLESHEET
import './RelatedNews.css';
// IMAGE IMPORTS
import News1 from '../../assets/images/news/News1.jpg';
import News2 from '../../assets/images/news/News2.jpg';
import News3 from '../../assets/images/news/News3.jpg';
// CUSTOM COMPONENT IMPORT
import News from "./News";

class RelatedNews extends Component {

    data = [
        {
            img: News1,
            title: "신재생에너지, e-모빌리티 연계해​ 제주 교통, 에너지 문제 해결",
            date: "10/08/2020"
        },
        {
            img: News2,
            title: "스마트시티 챌린지 사업 본격화 e-3DA 미래도시 구축",
            date: "24/08/2020"
        },
        {
            img: News3,
            title: "제주도. 2020 스마트시티챌린지 사업 선정",
            date: "28/05/2020"
        },
    ]

    render() {
        return (
            <div className='newsMainDiv'>
                <div className='NINDiv'>
                    관련소식
                    <hr />
                    <div className='rnDiv'>
                        {this.data.map((item) => {
                            return (<div style={{'padding': '10px'}}>
                                <News img={item.img} title={item.title} date={item.date} />
                            </div>);
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default RelatedNews;