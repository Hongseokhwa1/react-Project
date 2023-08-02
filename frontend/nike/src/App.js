import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let posts = '나이키 신발';

  function numb() {
    return "발사이즈 200";
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div className="">
          <a>쇼핑몰 222</a>
        </div>
      </div>
      <div>{posts}</div>
      <div>{numb()}</div>
      <Modal/>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>삭제요청</p>
        <p>상세내용</p>
    </div>
  )
} 

export default App;
