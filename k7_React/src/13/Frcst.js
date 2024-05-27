import ButtonC from "../UI/Button";
import TailSelect from '../UI/TailSelect';
import TailInput from "../UI/TailInput";

import getcode from './getcode.json';
import getxy from './getxy.json';

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Frcst() {

  const navigate = useNavigate();
  const [ops, setOps] = useState([]);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [area, setArea] = useState();

  const inRef = useRef();
  const selRef = useRef();

  const handleArea = () => {
    let tm = getxy.filter(item => item["1단계"] === selRef.current.value);
    tm = tm[0]
    setX(tm["격자 X"])
    setY(tm["격자 Y"])
    setArea(selRef.current.value)

    console.log(tm)
  };

  const handleUrl = (gubun) => {
    if(!x || !y || !inRef.current.value) {
      alert('날짜와 지역을 선택하세요.');
      return;
    }
    navigate(`/FrcstList?gubun=${gubun}&x=${x}&y=${y}&dt=${inRef.current.value.replaceAll('-','')}&area=${area}`)
  };


  //컴포넌트 생성시
  useEffect(() => {
    let tm = getxy.map(item => item["1단계"]);

    setOps(tm);
  }, []);

  useEffect(() => {
    console.log("x=", x, "y=", y, "Area=", area, "dt=", inRef.current.value)
  });

  return (
    <div className='w-full h-full
                    flex flex-col justify-start items-center'>
      <h1 className="w-full m-5
                     flex justify-center items-center
                     text-2xl font-bold">
        단기예보
      </h1>
      <div className='w-full mt-10
                      flex justify-center items-start'>
        <div className='w-10/12 
                        grid grid-cols-1 md:grid-cols-2 gap-5'>
          <TailInput id="dt"
                     type="date"
                     inRef={inRef} />
          <TailSelect id="sel"
                      ops={ops}
                      selRef={selRef}
                      initText="---지역선택---"
                      handleChange={handleArea} />
          <ButtonC caption="초단기예보"
                   bcolor="blue"
                   handleClick={() => handleUrl('초단기')} />

          <ButtonC caption="단기"
                   bcolor="blue"
                   handleClick={() => handleUrl('단기')} />

        </div>
      </div>
    </div>
  )
}
