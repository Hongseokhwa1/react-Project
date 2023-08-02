import React from 'react';
import './TopBar.css';

function DropMenu() {

    return ( 
        <div>
            <ul>
                <li className=''>
                    <a>
                        <span>로그인</span>
                    </a>
                </li>
                <li className=''>    
                    <a>
                        <span>가입하기</span>
                    </a>
                    <span> | </span>
                </li>
                <li className=''>
                    <a>
                        <span>고객센터</span>
                    </a>
                    <span> | </span>
                </li>
                <li className=''>
                    <a>
                        <span>매장 찾기</span>
                    </a>
                    <span> | </span>
                </li>
            </ul>
        </div>
    );
}

export default DropMenu;