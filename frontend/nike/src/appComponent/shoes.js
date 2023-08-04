import React, { useState }  from 'react';
import {Container} from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import '../appComponentCSS/shoes.css';
import ShoesDetail from './shoesDetail';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function shoes() {

    return (
        <div className='shoesInfo'>
            <div className='image-wrapper'>
                <img className='image' src='/shoes/Nike AirMax97.PNG'/>
            </div>
            <div className='shoesEtc'>
                <span>이름 : <a>에어맥스97</a></span>
                <span>사이즈 : <a>260</a></span>
                <span>가격 : <a>10만원</a></span>
            </div>
        </div>
    );
}


export default shoes;