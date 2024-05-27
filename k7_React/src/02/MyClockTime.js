import { CgQr } from 'react-icons/cg';
import './MyClock.css';
import Time from './Time';
import { useState, useEffect } from 'react';


function MyClockTime() {
    let now = new Date() ;
    const nowStr = now.toLocaleTimeString();
    const gubun = nowStr.substring(0,2);
    const st = {color:"yellow", fontWeight:"bold"};


    const [ctime, setCtime] = useState(new Date());

    useEffect(() => {
        const tm = setInterval(() => {
           setCtime(new Date()) 
        }, 1000);

        return () => {
            clearInterval(tm);
        }
    }, [])

    // let divStyle;
    // if(gubun == "오전") {
    //     divStyle = "div1"
    // } else {
    //     divStyle = "div2"
    // }
    // <div className={divStyle}>{nowStr}</div>


    // retruen안은 js-x문법 사용, 변수 사용시 {}, 제어문x 중괄호{}안에 수식연산, 삼항연산자 사용
    return (
        <>
        {/* <Time /> */} 
            <div className='text-emerald-600 font-bold text-2xl m-5'>{ctime.toLocaleTimeString()}</div>
        </>
    );
}

export default MyClockTime;