import { useState, useEffect } from "react";
import ButtonC from "../UI/Button";

export default function TrafficMain() {
  const [tdata, setTdata] = useState([]) ;    // 전체 fetch데이터
  const [c1, setC1] = useState() ;            // 대분류
  const [c1Tag, setC1Tag] = useState();       // 대분류 버튼
  const [c1Sel, setC1Sel] = useState();       // 선택된 대분류
  
  const [c2, setC2] = useState() ;            // 중분류
  const [c2Tag, setC2Tag] = useState();       // 중분류 버튼
  const [c2Sel, setC2Sel] = useState();       // 선택된 중분류

  const [info, setInfo] = useState();         // 선택된 상세정보


  // 대분류를 선택할 때 실행
  const handleC1Selector = (c1Sel) => {
    setC1Sel(c1Sel);
  }

  // 중분류를 선택할 때 실행
  const handleC2Selector = (c2Sel) => {
    setC2Sel(c2Sel);
  }

  // fetch 함수로 데이터 가져오기
  // .then() 데이터를 받아서 데이터를 유형을 변경 처리 비동기적 방식(fetch()내에서는 순차적으로 실행)
  // fetch에서 가져온 데이터 -> 대분류로 분류(setTdata, useState() 사용)
  const getFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json()) 
      .then(data => setTdata(data.data))
      .catch(err => console.log(err)) ;
  }


  // useEffect() 훅 - 어떤 일을 하도록 도와줌, 매개변수의 유형에 따라, 콜백 함수() => {}-화면이 변경이(state 변수가 변경) 되면 무조건 call,() => {}, [] <- 컴포넌트 생성시 한 번 실행, () => {}, [state변수] <- 특정 변수가 바뀔때 실행
  // 컴포넌트 생성시 한번 실행
  useEffect(()=>{
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
    url = `${url}page=1&perPage=17&returnType=json&`;                    // 데이터 page수
    url = `${url}serviceKey=${process.env.REACT_APP_API_KEY}`;         // 보안 처리
    
    console.log(url)
    getFetchData(url) ;
  }, []) ;


  // tdata가 변경이 되면 실행
  useEffect(() => {
    if(!tdata|| tdata.length === 0) return;

    console.log("tdata=", tdata) ;
    let tm = tdata.map(item => item['사고유형_대분류'])
    tm = [...new Set(tm)] ;

    setC1(tm);
  } , [tdata]);


  // 대분류 생성후
  useEffect(()=>{
    if (!c1 || c1.length === 0) return;
    console.log('c1=', c1) ;
    let tm = c1.map((item) => <ButtonC key={item} 
                                       caption={item} 
                                       bcolor={'blue'} 
                                       handleClick={() => handleC1Selector(item)} />);
    setC1Tag(tm);
  }, [c1]);


  //대분류 선택 => 중분류 데이터를 골라
  useEffect(() => {
    console.log("대분류 선택 : ", c1Sel);
    let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)
                    .map(item => item['사고유형_중분류']);

                    
    setC2(tm);
  },[c1Sel, tdata])


  // 중분류가 만들어졌을 때
  useEffect(()=>{
    if (!c2 || c2.length === 0) return;
    console.log('c2=', c2) ;
    let tm = c2.map((item) => <ButtonC key={item} 
                                       caption={item} 
                                       bcolor={'blue'} 
                                       handleClick={() => handleC2Selector(item)} />);
    setC2Tag(tm);
  }, [c2]);


  //중분류 선택  => 상세정보
  useEffect(() => {
    if (!c1Sel || !c2Sel) return;
    console.log("대분류선택 :", c1Sel)
    console.log("중분류선택 :", c2Sel)

    let tm = tdata.filter(item =>  item['사고유형_대분류'] === c1Sel &&
                                    item['사고유형_중분류'] === c2Sel )
    // object로 풀림
    tm = tm[0] ;
    console.log('상세', tm)
    setInfo(tm ? tm['사고건수'] : null)

  } , [c2Sel, c1Sel, tdata]) ;


  return (
    <div className="w-11/12 h-full 
                    flex flex-col justify-start items-start">
      <h2 className="w-full my-10
                     text-xl text-emerald-700 font-bold">
        교통사고 대분류
      </h2>
      <div className="w-full 
                      flex justify-between items-center">
        {c1Tag}
      </div>
      <h2 className="text-xl my-10
                   text-emerald-700 font-bold">
        교통사고 중분류
      </h2>
      <div className="w-full h-40
                      flex justify-between items-center">
        {c2Tag}
      </div>
      <div className="w-full my-20
                      flex justify-between items-center">
        사고건수 : {info ? parseInt(info).toLocaleString() : ''}
      </div>

    </div>
  )
  
}
