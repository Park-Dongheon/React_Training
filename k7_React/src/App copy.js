import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
// import logo from './logo.svg' ;
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import MyDiv from './03/Mydiv';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import BoxOffice from './06_1/BoxOffice';
import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import Traffic from './08 _1/Traffic'
import MyRef from './09/MyRef';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
import RouteMain from './12/RouteMain';

// 컴포넌트 생성 첫글자는 대문자, return이 있어야함, class(예약어) -> className사용, {}변수 수식 사용 가능
function App() {
  return (
    <div className="flex flex-col
                    w-full max-w-screen-lg h-screen
                    overflow-y-auto mx-auto">
      <header className='flex justify-between items-center
                         h-20 p-10 text-xl font-bold text-slate-100
                         bg-emerald-500'> 
        {/* 01 실습
        <img src={logo} className="App-logo" alt="logo" />
        <Hello /> */}

        {/* 02 실습
        <MyClockImg />
        <MyClockTime /> */}

        {/* 03 실습 */}
        <p>리액트 실습</p> 
        <p><RiHomeHeartFill className='text-3xl text-green-900'/></p>
      </header>

      <main className='grow flex justify-center items-center'>
        {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}


        {/* <MyDiv /> */}

        {/* <MyList /> */}

        {/* <Lotto /> */}
        
        {/* <MyClock /> */}

        {/* <BoxOffice /> */}

        {/* <FoodMain /> */}

        {/* <TrafficMain /> */}

        {/* <Traffic /> */}

        {/* <MyRef /> */}

        {/* <Gallery /> */}

        {/* <Festival /> */}

        {/* <RouteMain /> */}

      </main>

      <footer className='flex justify-center items-center 
                         h-20 bg-emerald-900 text-slate-100'>
      ⓒ Park Dong Heon , K-digital-7
      </footer>
    </div>
  );
}

// Import-Export 한 세트
export default App;