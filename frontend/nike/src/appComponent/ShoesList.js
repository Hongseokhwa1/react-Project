import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ShoesDetail from './ShoesDetail';
import '../appComponentCSS/shoes.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function ShoesList() {
    
    const [shoess, setShoess] = useState([]);

    useEffect(()=>{
        fetch("/index")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setShoess(data);
            });
    },[]);
    
    return (
        <>
        {shoess.map(shoes => {
            return (
                <Link key={shoes.shsId} to={`/shoesDetail/${shoes.shsId}`}>
                    <div className='shoesInfo'>
                        <div className='image-wrapper'>
                            <img className='image' src={`/shoes/${shoes.shsName}.PNG`} />
                        </div>
                        <div className='shoesEtc'>
                            <ul>
                                <li>이름 : <a>{shoes.shsName}</a></li>
                                <li>사이즈 : <a>{shoes.shsSize}</a></li>
                                <li>가격 : <a>{shoes.shsAmt}</a></li>
                            </ul>
                        </div>
                    </div>
                </Link>
            )
        })}
        </>
    );
}

function dd() {
    return (<>
    
    </>);
}

export default ShoesList;