// import logo from './logo.svg';
import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";

// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
// import MyDiv from './03_1/MyDiv';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import BoxOffice from './06_1/BoxOffice';
// import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';


function App() {
  return (
  // <MyClock />
    <div className="flex flex-col
                    w-full max-w-screen-lg h-screen 
                    overflow-y-auto mx-auto">

      <header className="flex justify-between items-center 
                         text-slate-100 text-xl font-bold h-20 p-10 
                         bg-emerald-500">

        {/* 리액트 로고 */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* 01. Hello 컴포넌트 기초 */}
        {/* <Hello /> */}

        {/* 02. 시계컴포넌트 */}
        {/* <MyClock /> */}

        <p className='text-slate-100'>리액트 실습</p>
        <p className='text-3xl text-green-700'><RiHomeHeartFill  /></p>
      </header>

      <main className='grow flex justify-center items-center'>

          {/* 03. probs */}
          {/* 03_1. probs, useState변수 */}
          {/* <MyDiv /> */}

          {/* 04. useState (HTML, CSS, JS, React 설명)*/}
          {/* <MyList /> */}

          {/* 05. Lotto */}
          {/* <Lotto /> */}

          {/* 06. 박스오피스 */}
          {/* 06_1. 박스오피스, Ref */}
          {/* <BoxOffice /> */}

          {/* 07. 푸드뱅크 */}
          {/* <FoodMain /> */}

          {/* 08. 교통사고 분류 */}
          <TrafficMain />

      </main>

      <footer className='flex justify-center items-center 
                         h-20 bg-emerald-700 text-slate-100'>
        ⓒ 2024 Park-DongHeon , K-digital-7
      </footer>

    </div>
  );
}

export default App;
