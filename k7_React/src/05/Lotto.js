import Ball from "./Ball"
import Button from "../UI/Button"
import { useState } from "react";

export default function Lotto() {
  const [tags, setTags] = useState();

  const handleOk = () => {
    console.log('ok');
 
    let arr = [];

    while(arr.length < 7){
        let n = Math.floor(Math.random()*45) + 1;

        if(!arr.includes(n)) {
            arr.push(n);
        };
    }

    let tm = arr.map(item => <Ball n={item} key={item} />);

    tm.sort();
    // 배열 중간 추가
    tm.splice(6,0,<span className="text-3xl mx-2" key="sp">+</span>);
    
    setTags(tm);
  } 

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="m-10">           
            {tags}
        </div>
        <div>
            <Button caption={'로또번호생성기'} bcolor={'blue'} handleClick={handleOk} /> 
        </div>
    </div>
  )
}
