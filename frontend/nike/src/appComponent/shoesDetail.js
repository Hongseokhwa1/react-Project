import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import '../appComponentCSS/shoes.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function ShoesDetail() {

    const [id, setId] = useState(0);

    return (
        <div className='shoesDetail'>
            <span>Detail로 왔습니당.</span>
        </div>
    );
}


export default ShoesDetail;