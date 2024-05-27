import { useState } from "react";
// 컴포넌트의 계층적으로 생성 MyDiv() -> MyDiv2() -> MyDiv3()
import MyDiv2 from "./MyDiv2";

export default function MyDiv() {
  
  // useState변수 선언, 배열의 구조분해 형식, useState의 Hook이 제어 n의 초깃값 설정 가능
  const [n, setN] = useState(0);
  const handleCount = () => {
    setN(n + 1);
    console.log("handleCount = ", n);
  };

  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';

  return (
    <div className="flex flex-col 
                    justify-center items-center
                    w-2/3 h-2/3 p-5 m-10 
                    bg-emerald-400 text-slate-100 text-2xl">

      <div className="flex justify-end items-center
                      w-full h-20 border p-5 m-5">
        <span className="inline-flex p-5 mx-10" 
              onClick={handleCount}>
            ❤️
        </span>
        <span>
            {n}
        </span>
      </div>

      <div className="flex justify-start 
                      w-full font-bold">
        {dname1}
      </div>
      {/* dn(사용자 정의 속성) = {dname}(값) */}
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />

    </div>
  )
}
