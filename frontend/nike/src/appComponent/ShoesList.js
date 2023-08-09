import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom/client';
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
            <span>{shoess.length}</span>
            {shoess.map((shoes) => {
                <span>{shoes.shsName}</span>
			})}
        </>
    );
}


export default ShoesList;