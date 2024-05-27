import { useState, useEffect } from "react";

export default function MyListItem({title, imgUrl, content}) {
  // Hook : useState()는 배열반환 => 구조분해 할당, 컴포넌트가 가지는 상태값 -> 상태값이 변경되면 화면이 재랜더링, 
  const [cnt,setCnt] = useState(0);

  // Hook : useEffect()는 어떤 행위를 실행, 메서드 형태, 컴포넌트 생성시 최초 한번만 실행, Dependency Array에 의해 자동실행, React가 제어
  useEffect(() => {
      console.log(title, '생성');
  }, []);

  // state 변수가 병경
  useEffect(() => {
    console.log(title, '변경 cnt = ', cnt);
  }, [cnt]);

  // 컴포넌트가 변경되면 항상 실행
  useEffect(() => {
    console.log(title, '변경됨');
  });

  // onClick 속성의 사용자 정의 함수
  const handleClick = () => {
    setCnt(cnt + 1);
    // 재랜더링 이전에 console.log가 실행, 비동기적인 실행 방식, cnt 값이 바뀌기전에 실행됨
    console.log(title, 'cnt = ', cnt)
  };

  return (
    <div className="flex justify-center items-start
                    w-full h-full p-2 bg-slate-100">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between 
                      w-2/3 h-full m-2 p-2">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{content}</p>
        </div>
        <div className="flex justify-end items-center">
          <span  onClick={handleClick}>❤️</span>
          <span className="inline-flex mx-2 font-bold">좋아요</span>
          <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
  )
}