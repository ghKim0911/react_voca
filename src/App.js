import './App.css';

// vue랑 똑같음
//import Hello from './component/Hello';
//import Welcome from './component/Welcome';
//import StateTest from './component/StateTest';
//import PropsTest from './component/PropsTest';

// 라우트 
import Header from "./component/list/Header";
import DayList from "./component/list/DayList";
import Day from "./component/list/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  // const name = "Tom";
  // const naver = {
  //   name: "네이버",
  //   url: "https://naver.com",
  // };
  return (
    
    <BrowserRouter>
    {/* // 여기서 왜 class가 아니라 className인가?
    // 자바스크립트에서 이미class가 예약어라서 className로 대신 사용 */}
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day">
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    );   
      //   {/* vue랑 똑같음 */}
      //   {/* <Hello/>  
      //   <Welcome/>  
      //   <PropsTest /> */}
      //    {/* style은 안에 객체로 넣어줘야함 */}
      //   {/* <h1 style={{
      //     color: "#f0f",
      //     backgroundColor: "green",
      //   }}>
      //     Hello, {name}.<p>{2 + 3}</p>
      //     </h1>
      // <a href={naver.url}>{naver.name}</a> */}
      // {/* // 저~~~번에 이사님이 ifram설명해주실때 곁들여서 설명해주신 div영역만 바꿔가는 요즘 화면 처리 방식
      // // Vue도 방식 동일
      // // 대신 react에서는 약간 다르게 jsx(JavaScript XML)로 Javascript안에서 HTML같은 구문을 작성할수 있게 해주는 방식을 사용함
      // // 
      //  <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     KGH~~~
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>  */}

}

export default App;
