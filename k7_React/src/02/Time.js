import style from './My.module.css'

function Time() {
    let now ;
    const nowStr = now.toLocaleTimeString();
    const gubun = nowStr.substring(0,2);
    const st = {color:"yellow", fontWeight:"bold"};

    return (
        <>
        {
            // gubun === "오전" ? <div className="div1">{nowStr}</div> : <div className="div2">{nowStr}</div>
        }

        {/* className의 속성값으로 삼항연산자 사용 */}
        {/* <div className={gubun === "오전" ? "div1" : "div2"}>{nowStr}</div> */}

        {/* inlineCss style - object형태{} 사용 */}
        {/* <div style={{color:"yellow", fontWeight:"bold"}}>{nowStr}</div> */}

        {/* style 속성값 변수 처리 */}
        {/* <div style={st}>{nowStr}</div> */}

        {/* style css modle화, 지역적으로 css 먹임 */}
        <div className={style.c1}>{nowStr}</div>
        </>
    );
}

export default Time;