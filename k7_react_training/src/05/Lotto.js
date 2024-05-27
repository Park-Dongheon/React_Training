
import Button from "../UI/Button"
import Ball from "./Ball";
import { useState } from "react";

export default function Lotto() {

  const [tags, setTags]  = useState();

  const handleOk = () => {
    console.log('ok');

    let arr = [];
    // 배열의 길이: 7
    while(arr.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1;
        
        // 번호 중복 제거
        if(!arr.includes(n)) {
            arr.push(n);
        };
    };

    // 번호 배열의 요소를 하나씩 뽑음
    let tm = arr.map(item => <Ball key={item}
                                   n={item} />);
    tm.sort();

    // 배열 중간 '+'연산자 추가
    tm.splice(6,0,<span className="text-3xl- mx-2"
                        key="sp"> + </span>)
    
    setTags(tm);
  };

  return (
    <div className="w-full 
                    flex flex-col justify-center items-center">

        <div className="m-10">
            {tags}
        </div>
        <div>
            <Button caption={'로또번호 생성기'} 
                    bcolor={'blue'}
                    handleClick={handleOk}/>
        </div>

    </div>
  )
}
