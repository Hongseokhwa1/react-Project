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
          <a>쇼핑몰 만들어보기111</a>
        </div>
      </div>
      <div>{posts}</div>
      <div>{numb()}</div>
    </div>
  );
}

export default App;
