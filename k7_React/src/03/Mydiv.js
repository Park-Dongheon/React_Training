// 컴포넌트의 계층적으로 생성 MyDiv() -> MyDiv2() -> MyDiv3()
import MyDiv2 from "./MyDiv2"
import { useState } from "react";

export default function MyDiv() {

  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  
  // useState변수 선언, 배열의 구조분해 형식, useState의 Hook이 제어 n의 초깃값 설정 가능
  const [n, setN] = useState(0);
  let cnt = 0;
  const handleCount = () => {
    setN(n + 1);
    console.log("handleCount = ", n);
  }

  return (
    <div className="w-1rem h-1rem p-10 m-5
                    flex flex-col justify-center items-center bg-emerald-500 text-2xl text-lime-300">
      
      <div className="w-full h-10 border p-5
                      flex justify-end items-center">
        <span className="inline-flex p-5 mx-5" onClick={handleCount}>
          ❤
        </span>
        <span>
          {n}
        </span>
      </div>

      <div className="w-full font-bold
                      flex justify-start">
        {dname1}
      </div>
      
      {/* dn(속성) = {dname}(값) */}
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>

    </div>
  )
}
