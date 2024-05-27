import './MyClock.css';
import style from './My.module.css';

function MyClockTime() {
  const now = new Date();
  const nowStr = now.toLocaleDateString();

//   const gubun = noStr.substring(0,2);
//   const st = {
//     color : "yellow",
//     fontWeight : "bold"
//   };

//   let divStyle;
//   if(gubun == '오전') divStyle = 'div1';
//   else divStyle = 'div2';

  return (
    <>
      {/* (gubun === '오전') ? <div className='div1'>{nowStr}</div> : <div className='div2'>{nowStr}</div> */}

      {/* <div className={gubun === '오전' ? "div1" : "div2"}></div> */}

      {/* <div style={{color : "yellow", fontWeight : "bold"}}></div> */}

      {/* <div style={st}></div> */}

      <div className={style.c1}>{nowStr}</div>
    </>
  )
}

export default MyClockTime