
import Button from "../UI/Button"
import { useState, useRef, useEffect } from "react";

export default function MyRef() {

  let cVal = 0;
  const [ sVal, setSVal ] = useState(0);
  // Ref 폼 태그 값을 가져올 때 사용
  const rVal = useRef(0);

  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();

  // 컴포넌트 변수 증가
  const handleClickComp = () => {
    cVal++
    console.log('cVal: ', cVal)
  };

  // state 변수 증가
  const handleClickState = () => {
    setSVal(sVal +1)
  };

  // ref 변수 증가
  const handleClickRef = () => {
    rVal.current = rVal.current + 1
    console.log('rVal: ', rVal)
  };

  const handleClick = () => {
    if(!x1.current.value) {
      alert('값을 입력하세요.');
      x1.current.focus();
    }

    if(!x2.current.value) {
      alert('값을 입력하세요.');
      x2.current.focus();
    }
    console.log('x1: ', x1.current.value )
    console.log('x2: ', x2.current.value )
    x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value)
    console.log('x3: ', x3.current.value)
  };

  // state 변수 사용
  useEffect(() => {
    console.log('sVal: ', sVal)
  },[sVal]);


  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="h-20 p-5 m-5 font-bold text-xl ">
        <span className="text-emerald-600">컴포넌트 변수 : {cVal}</span>
        <span className="mx-5">state 변수 : {sVal}</span>
        <span>ref 변수 : {rVal.current}</span>
      </div>

      <div>
        <span><Button caption='컴포넌트 변수' bcolor='blue' handleClick={handleClickComp} /></span>
        <span><Button caption='state 변수' bcolor='blue' handleClick={handleClickState} /></span>
        <span><Button caption='ref 변수' bcolor='blue' handleClick={handleClickRef} /></span>
      </div>


      <div className="w-4/5 m-10 p-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <input type="number" id="txt1"
               ref={x1}
               className="block w-full p-2.5
               text-emerald-800 border border-emerald-600 rounded-lg bg-emerald-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
        <span className="inline-flex justify-center items-center">+</span>
        <input type="number" id="txt2"
               ref={x2} 
               className="block w-full p-2.5
               text-emerald-800 border border-emerald-600 rounded-lg bg-emerald-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
        <Button caption='=' bcolor='blue' handleClick={handleClick}/>
        <input type="number" id="txt3" ref={x3}
               className="block w-full p-2.5
               text-emerald-800 border border-emerald-600 rounded-lg bg-emerald-50 text-base focus:ring-blue-500 focus:border-blue-500" readOnly />
      </div>
    </div>
  )
}
