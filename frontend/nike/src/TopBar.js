import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import './TopBar.css';

function TopBar() {

    let [isClaim, setOpen] = useState(false);

    let claimMenu = () => {
        setOpen(!isClaim);
    }

    return ( 
        <div className='TopBar'>
            <div className='logoItem'>
                <a onClick={
                    ()=> {
                        alert("조던 구매!");
                    }
                }><img className='logo' src='/logo/jodan.PNG'/></a>
                <a onClick={
                    ()=>{
                        alert("컨버스 구매");
                    }
                }><img className='logo' src='/logo/converse.PNG'/></a>
            </div>
            <div className='allUserMenu'>
                <ul >
                    <li className='userMenu'>
                        <a>
                            <span>로그인</span>
                        </a>
                    </li>
                    <li className='userMenu'>    
                        <a>
                            <span>가입하기</span>
                        </a>
                        <span> | </span>
                    </li>
                    <li className='userMenu'>
                        <a onClick={
                                claimMenu
                        } className='claim'>
                            <span>고객센터</span>
                        </a>
                        <span> | </span>
                        <div className={`noneMenu ${isClaim && "dropMenu"}`}>
                            <ul className='dropMenu2'>
                                <li className='dropMenu3'>
                                    <a onClick={
                                        ()=> {
                                            alert("주문");
                                        }
                                    }>
                                        <span>주문</span>
                                    </a>
                                </li>
                                <li className='dropMenu3'>   
                                    <a onClick={
                                        ()=> {
                                            alert("결제방법");
                                        }
                                    }>
                                        <span>결제방법</span>
                                    </a>
                                </li>
                                <li className='dropMenu3'>
                                    <a onClick={
                                        ()=> {
                                            alert("배송");
                                        }
                                    }>
                                        <span>배송</span>
                                    </a>
                                </li>
                                <li className='dropMenu3'>
                                    <a onClick={
                                        ()=> {
                                            alert("반품");
                                        }
                                    }>
                                        <span>반품</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='userMenu'>
                        <a>
                            <span>매장 찾기</span>
                        </a>
                        <span> | </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;