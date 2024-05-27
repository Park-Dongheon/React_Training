import fooddata from './fooddata/fooddata.json';
import Button from '../UI/Button';
import FoodCard from './FoodCard';
import { useState } from 'react';


export default function FoodMain() {

  const [cList, setCList] = useState([]);

  /* 버튼 */
  // item은 {}블록 단위의 오브젝트 정보
  let c = fooddata.map(item => item['운영주체 분류']);
  c = new Set(c);   // 중복이 제거된 Set객체 생성, 파이썬에서도 Set() 데이터 타입으로 중복 제거
  c = [...c];   // Set 타입을 배열의 형태로 풀어서(...) c1변수에 저장
  console.log("c : ", c);

  const handleC = (c) => {
    console.log("c : ");
    let tm = fooddata.filter(item => item['운영주체 분류'] === c)
                     .map(item => <FoodCard key={item['사업장명']} 
                                            data={item} />)
    setCList(tm)
  };

  const cBts = c.map(item => <Button key={item}
                                     caption={item}
                                     bcolor={'blue'}
                                     handleClick={() => handleC(item)} />);
  return (
    <div className='w-full h-full
                    flex flex-col justify-start items-center'>

      <div className='w-full h-1/10 my-3
                      grid grid-cols-1 md:grid-cols-2 gap-2'>
        {cBts}
      </div>
      <div className='w-full h-9/10
                      grid grid-cols-1 md:grid-cols-2 gap-2'>
        {cList}
      </div>
      
    </div>
  )
}
