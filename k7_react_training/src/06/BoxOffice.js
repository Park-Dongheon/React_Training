import box from './BoxOffice.json'
import BoxOfficeTHead from "./BoxOfficeTHead";
import BoxOfficeTBody from "./BoxOfficeTBody";
import BoxOfficeInfo from './BoxOfficeInfo';
import { useState, useEffect } from 'react';

export default function BoxOffice() {

  const [dailyList, setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();

  // 컴포넌트 생성 후 한 번만 실행
  useEffect(() => {
    setDailyList(box.boxOfficeResult.dailyBoxOfficeList);
  }, []);

  // dailyList가 바뀌면 초깃값을 줌
  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList]);

  return (
    <div className="w-full h-full">
      
      <div className="w-full mt-10
                      flex flex-col justify-start items-center">

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
