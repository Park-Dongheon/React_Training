import TrafficNav from "./TrafficNav"
import { useEffect, useState } from "react"

export default function Traffic() {
  // 상태 변수: 컴포넌트 내에서 데이터를 관리하고 업데이트하는 데 사용
  // tdata 상태 변수는 컴포넌트의 여러 부분에서 사용
  // (대분류와 중분류 데이터 필터링, 버튼 생성, 사용자가 선택한 대분류와 중분류에 따른 상세 정보를 표시)
  const [ tdata, setTdata ] = useState();       // fetch 데이터
  
  const [ c1, setC1 ] = useState();     // 대분류 데이터
  const [ selC1, setSelC1 ] = useState();       // 선택된 대분류

  const [ c2, setC2 ] = useState();     // 중분류 데이터
  const [ selC2, setSelC2 ] = useState();       // 선택된 중분류

  const [ info, setInfo ] = useState();     // 선택된 상세정보
  
  // 사용자 정의 함수
  const getFetchData = (url) => {
    // 데이터 가져옴, 응답을 JSON 형식으로 변환
    // setTdata(data.data)는 fetch 요청에서 받은 데이터를 tdata 상태 변수에 저장하는 역할
    // data.data는 fetch 요청이 반환하는 JSON 응답 객체에서 필요한 데이터가 data 속성 안에 있다는 것
    fetch(url).then(resp => resp.json())        // JSON 변환 시 함수 호출
              .then(data => setTdata(data.data))        // 변환된 데이터를 setTdata를 사용하여 tdata 상태 변수에 저장
              .catch(err => console.log(err))       // fetch 요청이 실패하면, 오류를 콘솔에 출력
  };

  // 컴포넌트 생성시, useEffect 훅은 컴포넌트가 처음 생성될 때 한 번 실행
  useEffect(() => {
    // url 변수를 설정, URL에는 페이지 수, 반환 형식, 서비스 키 등이 포함
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'       
    url = `${url}page=1&perPage=17&returnType=json`;                    // 데이터 page수
    url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;         // 보안 처리

    console.log(url)
    // getFetchData 함수를 호출하여 데이터를 가져옴
    getFetchData(url);
  }, []);

  // tdata 변경될 때
  useEffect(() => {
    // 컴포넌트 생성될 때 데이터가 없으므로 데이터 유무 확인(비동기적)
    if(!tdata) return;
    console.log(tdata)

    let tm = tdata.map(item => item['사고유형_대분류']);
    tm = [...new Set(tm)];
    
    setC1(tm);

  }, [tdata]);
  
  // 대분류가 생성이 되면
  useEffect(() => {
    if(!tdata || !c1) return;
    console.log("c1:", c1)
  }, [c1, tdata]);

  // 대분류를 선택하면 => c2 생성
  useEffect(() => {
    if(!tdata || !c1 || !selC1) return;
    let tm = tdata.filter(item => item['사고유형_대분류'] === selC1)
                  .map(item => item['사고유형_중분류'])
    setC2(tm)
    setInfo(' ')
    console.log(selC1)
  },[selC1, c1, tdata])
  
  // 중분류가 선택되면
  useEffect(() => {
    console.log("대분류:",selC1,"중분류:",selC2)
    if(!tdata || !c1 || !selC1 || !selC2) return;
    // filter의 결과 => 배열 하나
    let tm = tdata.filter(item => item['사고유형_대분류'] === selC1 &&
                                  item['사고유형_중분류'] === selC2)
    // object
    tm = tm[0]

    console.log("상세:", tm)
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수']
    tm = infoKey.map(item => <div key={item} className="flex flex-col" >
                                <div className="flex justify-center items-center
                                              bg-emerald-300 text-emerald-900 font-bold
                                                h-10">
                                    {item}
                                </div>
                                <div className="flex justify-center items-center
                                                bg-emerald-100 text-emerald-500 font-bold
                                                h-20">
                                    {parseInt(tm[item]).toLocaleString()}
                                </div>
                             </div>
    );
    setInfo(tm)
  }, [selC2, c1, selC1, tdata]);

  return (
    <div className="w-full h-full mt-10
                    flex flex-col justify-start items-center">
      <div>
        {c1 && <TrafficNav title='대분류' c={c1} sel={selC1} setSel={setSelC1}/>}
      </div>
      <div>
        {c2 && <TrafficNav title='중분류' c={c2} sel={selC2} setSel={setSelC2}/>}
      </div>
      <div className="w-full h-full mt-10
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {info}
      </div>

    </div>
  )
}
