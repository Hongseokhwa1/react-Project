import React, { useState }  from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { MDBRipple } from 'mdb-react-ui-kit';
import Shoes from './appComponent/shoes';
import './App.css';


function App() {

  let [isOrderBy, setOrderBy] = useState(false);

  let orderByMenu = () => {
    setOrderBy(!isOrderBy);
  }

  return (
    <div className="App">
      <div className="black-nav">
      </div>
      <div className='appEtc'>
        <div className='orderBy'>
          <span>정렬기준:
            <div className={`noneOrderByMenu ${isOrderBy && "dropOrderByMenu"}`}>
              <ul className='dropMenu2'>
                <li className='dropMenu3'>
                    <a onClick={
                        ()=> {
                            alert("추천순");
                        }
                    }>
                        <span>추천순</span>
                    </a>
                </li>
                <li className='dropMenu3'>   
                    <a onClick={
                        ()=> {
                            alert("최신순");
                        }
                    }>
                        <span>최신순</span>
                    </a>
                </li>
                <li className='dropMenu3'>
                    <a onClick={
                        ()=> {
                            alert("높은가격순");
                        }
                    }>
                        <span>높은가격순</span>
                    </a>
                </li>
                <li className='dropMenu3'>
                    <a onClick={
                        ()=> {
                            alert("낮은가격순");
                        }
                    }>
                        <span>낮은가격순</span>
                    </a>
                </li>
              </ul>
            </div>
          </span>
          <span>정렬</span>
          <button type="submit" onClick={
            orderByMenu
          }>
            👇
          </button>
        </div>
      </div>
      <Shoes />
      <BrowserRouter>
          <Routes>
              <Route path='./appComponent/shoesDetail' element={<Shoes />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;
