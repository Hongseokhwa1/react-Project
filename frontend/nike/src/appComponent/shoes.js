import React, {useEffect, useState} from "react";
import '../appComponentCSS/shoes.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


function Shoes() {

    const [shoesList, setShoesList] = useState([]);

    useEffect(()=>{
        fetch("/shoesList")
            .then((response)=>{
            return response.json();
            })
            .then((data)=>{
                setShoesList(data);
            });
        
    },[]);

    return (
        <div className='shoesInfo'>
            <div className='image-wrapper'>
                <img className='image' src='./shoes/Nike AirMax97.PNG'/>
            </div>
            <div className='shoesEtc'>
                <span>이름 : <a>에어맥스97</a></span>
                <span>사이즈 : <a>260</a></span>
                <span>가격 : <a>10만원</a></span>
            </div>
        </div>
    );
}


export default Shoes;