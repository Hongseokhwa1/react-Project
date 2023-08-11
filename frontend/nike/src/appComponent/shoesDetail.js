import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import '../appComponentCSS/shoes.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function ShoesDetail() {

    let param = useParams();
    const [shoes, setShoes] = useState({});
    let status = null;

    useEffect(()=>{
        fetch(`/shoesDetail/${param.id}`)
            .then((response)=>{
                status = response.status;
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                setShoes(data);
                console.log(shoes);
            });
    },[]);

    return (
        <div className="shoesDetail">
            <a>{}</a>
        </div>
    );
}


export default ShoesDetail;