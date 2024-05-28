import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json";
import { useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState, useMemo } from "react";



export default function FrcstList() {
  // url전달값
  const [sParams] = useSearchParams();
  const gubun = sParams.get('gubun');
  const x = sParams.get('x');
  const y = sParams.get('y');
  const dt = sParams.get('dt');
  const area = sParams.get('area');
  console.log("sParams", gubun, x, y, dt, area)

  // State변수
  const [ops, setOps] = useState([]);
  const [tdata, setTdata] = useState();         // 예보정보
  const [selItem, setSelItem] = useState();     // 선택한 항목 코드 정보
  const [tags, setTags] = useState();           // 화면 tr 생성
  
  // Ref변수
  const selRef = useRef();

  // code 변수
  const sky = useMemo(() => ({
    '1':'☀️(맑음)',
    '3':'☁️(구름많음)',
    '4':'🌥️(흐림)'
  }), []);

  const pty = useMemo(() => ({
    '0':'(없음)',
    '1':'비',
    '2':'비/눈',
    '3':'눈',
    '4':'소나기',
    '5':'빗방울', 
    '6':'빗방울눈날림',
    '7':'눈날림'
  }), []);
  
  // 항목선택
  const handleSelect = () => {
    console.log(selRef.current.value);
    let tm = getcode.filter(item => (gubun === "단기" ?
                                              item["예보구분"] === '단기예보' : 
                                              item["예보구분"] === '초단기예보') && 
                                              item['항목명'] === selRef.current.value);

    // console.log("select item", tm)
    setSelItem(tm[0]);
  };
    // data fetch    
  const getFetchData = (url) => {
    fetch(url)
              .then(resp => resp.json())
              .then(data => {
                    console.log("fetch", data); 
                    setTdata(data.response.body.items.item) 
                });
    
    console.log("getFetchData", url)
  };

  // 컴포넌트 생성시
  useEffect(() => {
    // 항목 select
    let tm = getcode.filter(item => gubun === "단기" ?
                                        item["예보구분"] === '단기예보' : 
                                        item["예보구분"] === '초단기예보')
                    .map(item => item["항목명"]);
    console.log("tm", tm)
    setOps(tm)

    let url ;
    if (gubun === '초단기'){
        url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`
        url = url + `&dataType=json&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`
    }
    else {
        url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=900&pageNo=1`
        url = url + `&dataType=json&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
    }

    getFetchData(url)
    
  }, [dt, gubun, x, y]);

  useEffect(() => {
    if(!tdata) return;
    console.log(tdata)
  }, [tdata]);

  useEffect(() => {
    if(!selItem) return;
    console.log("selItem",selItem)

    let tm = tdata.filter(item => item['category'] === selItem['항목값'])
                    .map(item =>
                              <tr key={`${item['fcstDate']}${item['fcstTime']}`} 
                              className="border-b border-emerald-200 
                                       hover:bg-emerald-100 text-center font-bold">
                                <th scope="col" className="px-6 py-3">
                                  {selItem['항목명']}{selItem['category']}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  {`${item['fcstDate'].substring(0,4)}-${item['fcstDate'].substring(4,6)}-${item['fcstDate'].substring(6,8)}`}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                {item['fcstTime']}
                                  {`${item['fcstTime'].substring(0,2)}:
                                  ${item['fcstTime'].substring(2,4)}`}
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  {item['category'] === 'SKY'?
                                    sky[item['fcstValue']] :
                                    item['category'] === 'PTY'?
                                    pty[item['fcstValue']]:
                                    `${item['fcstValue']}${selItem["단위"]}`}
                                </th>
                              </tr>
                          );
    console.log("tdata filter",tm)
    setTags(tm)
    
  }, [selItem, pty, sky, tdata]);



  return (
    <div className="w-full h-full
                    flex flex-col justify-start items-center">
      <div className="w-10/12 p-2
                      grid grid-cols-1 md:grid-cols-2 gap-2">
        <h1 className="w-full m-5 text-2xl font-bold
                       flex justify-center items-center">
            {gubun} 예보(<div className="text-emerald-700">{area}</div>)
        </h1>
        <div className=" m-5 flex justify-center items-center">
            <TailSelect id="sel"
                        ops={ops}
                        selRef={selRef}
                        initText="---지역선택---"
                        handleChange={handleSelect} />
        </div>
      </div>
      <table className="w-11/12 bg-emerald-100
                        text-left text-sm text-surface font-light">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className='bg-emerald-600 text-emerald-200 text-center font-bold'>
            <th scope="col" className="px-6 py-3">항목명</th>
            <th scope="col" className="px-6 py-3">예측일자</th>
            <th scope="col" className="px-6 py-3">예측시간</th>
            <th scope="col" className="px-6 py-3">항목값</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}
