import React, { useState } from 'react';
import './TopBar.css';

const claim = document.getElementById("claim");

function TopBar() {

    let isClaim = useState()

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
                <ul>
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
                            (claim)=>{
                                <DropMenu />
                            }
                        } id='claim'>
                            <span>고객센터</span>
                        </a>
                        <span> | </span>
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