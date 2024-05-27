import box from './BoxOffice.json';
import BoxOfficeTBody from './BoxOfficeTBody';
import BoxOfficeTHead from './BoxOfficeTHead';
import BoxOfficeInfo from './BoxOfficeInfo';

import { useState, useEffect } from 'react';

export default function BoxOffice() {
  const [ dailyList, setDailyList ] = useState([]);
  const [ selMv, setSelMv ] = useState();

  // 컴포넌트 생성 후(한 번만 실행) state 변수 두 개 호출
  useEffect(() => {
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  // dailyList 가 바뀌면 초깃값을 줌
  useEffect(() => {
    setSelMv(dailyList[0]);
  },[dailyList]);

  return (
  <div className="w-full h-full">
    <div className="w-full flex flex-col justify-start items-center mt-10">
        <table
          className="bg-emerald-100 w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeTHead />
          {/*  dailyList useState변수, setSelMv 함수   */}
          <BoxOfficeTBody dailyList = {dailyList} setSelMv = {setSelMv} />
        </table>
        { selMv && <BoxOfficeInfo selMv={selMv} />}
    </div>
  </div>
  )
}
