import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
// import logo from './logo.svg' ;
import Hello from './01/Hello';
import MyClock from './02/MyClock';
import MyDiv from './03/Mydiv';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodMain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import Traffic from './08_1/Traffic'
import MyRef from './09/MyRef';
import Gallery from './10/Gallery';
import Festival from './11/Festival';
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';
import RecoilMain from './14/RecoilMain';
import Rest from './15/Rest';


// RecoilMain 경로에 찾아가도록 Route 경로 설정
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";


// 컴포넌트 생성 첫글자는 대문자, return이 있어야함, class(예약어) -> className사용, {}변수 수식 사용 가능
function App() {

  return (
    <BrowserRouter>
      <div className="w-full mx-auto h-screen max-w-screen-lg
                      flex flex-col">
        <header className='w-full h-1/7 p-1 bg-emerald-500
                           flex justify-center items-center
                           text-xs font-bold text-slate-100'>
          <p className='w-1/6 h-1/6 
                        flex justify-center items-center
                      text-yellow-200
                        text-xl font-extrabold'>
            리액트실습
          </p>

          <ul className='w-full h-full text-sm
                         flex flex-wrap justify-between items-center'>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Hello'>Hello</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/MyClock'>MyClock</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/MyDiv'>MyDiv</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/MyList'>MyList</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Lotto'>Lotto</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/BoxOffice'>BoxOffice</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/FoodMain'>FoodMain</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/TrafficMain'>TrafficMain</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Traffic'>Traffic</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Gallery'>Gallery</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Festival'>Festival</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Frcst'>Short-Term Forecast</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/RecoilMain'>RecoilMain</Link>
            </li>
            <li className='mx-2 p-2 rounded-md text-xs
                         hover:bg-emerald-300 hover:text-slate-100'>
              <Link to='/Rest'>RestFull</Link>
            </li>
          </ul>
          <p className='text-3xl text-green-900'><Link to='/'><RiHomeHeartFill /></Link></p>
        </header>

        <main className='grow flex justify-center items-center'>
          <Routes>
            <Route path="/Hello" element={<Hello />} />
            <Route path="/MyClock" element={<MyClock />} />
            <Route path="/MyDiv" element={<MyDiv />} />
            <Route path="/MyList" element={<MyList />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/BoxOffice" element={<BoxOffice />} />
            <Route path="/FoodMain" element={<FoodMain />} />
            <Route path="/TrafficMain" element={<TrafficMain />} />
            <Route path="/Traffic" element={<Traffic />} />
            <Route path="/MyRef" element={<MyRef />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Festival" element={<Festival />} />
            <Route path="/Frcst" element={<Frcst />} />
            <Route path="/FrcstList" element={<FrcstList />} />
            <Route path="/RecoilMain" element={<RecoilMain />} />
            <Route path="/Rest" element={<Rest />} />
            <Route path="/" element={<RiHomeHeartFill />} />
          </Routes>
        </main>

        <footer className='flex justify-center items-center h-20 bg-emerald-900 text-slate-100'>
          ⓒ Park Dong Heon , K-digital-7
        </footer>
      </div>
    </BrowserRouter>
  );
}

// Import-Export 한 세트
export default App;