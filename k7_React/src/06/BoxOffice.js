import BoxOfficeTBody from './BoxOfficeTBody';
import BoxOfficeTHead from './BoxOfficeTHead';
import BoxOfficeInfo from './BoxOfficeInfo';
import { useState, useEffect, useRef } from 'react';

export default function BoxOffice() {

  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef();

  // 데이터 가져오기
  const getFetch = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setDailyList(data.boxOfficeResult.dailyBoxOfficeList)
      })
      .catch(err => console.log(err))
  };

  // 날짜가 선택 되었을 때
  const handleSelect = (e) => {
    e.preventDefault();
    // console.log(selDate.current.value);       // Ref변수 사용할 때
    // console.log(e.target.value);        // Ref변수 사용하지 않을 때

    /*
    https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
    */

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = url + `key=${process.env.REACT_APP_MV_KEY}`;
    // replaceAll 로 '-'문자 공백 없이 바꿈
    url = url + `&targetDt=${selDate.current.value.replaceAll('-', '')}`;
    console.log("url", url);
    getFetch(url);
  };

  // dailyList가 바뀌면 초깃값을 줌
  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList]);

  return (
    <div className="w-full h-full">
      
      <div className="w-full mt-10
                      flex flex-col justify-start items-center">
        <form className='w-full'>
        <div className='w-11/12 mb-5
                        flex justify-end items-center'>
          <label htmlFor='dateId'
                 className='mx-5 font-bold rounded-md
                          bg-emerald-300 text-emerald-900'>
            날짜선택
          </label>
          <input type='date'
                 id='dateId'
                 ref={selDate}
                 onChange={handleSelect}
                 className='border-emerald-700 rounded-md font-bold
                            bg-emerald-300 text-emerald-900'/>
        </div>
        </form>

        <table className="w-11/12 bg-emerald-100
                          text-left text-sm text-surface font-light">
          <BoxOfficeTHead />

          {/*  dailyList useState변수, setSelMv 함수   */}          
          <BoxOfficeTBody dailyList={dailyList}
                          setSelMv={setSelMv} />
        </table>
        {selMv && <BoxOfficeInfo selMv={selMv} />}

      </div>
      
    </div>
  )
}
