import bank from './fooddata/img/bank.png';
import busan from './fooddata/img/busan.png';
import market from './fooddata/img/market.png';
import { useState } from 'react';

export default function FoodCard({data}) {
//   const [image, setImage] = useState();
  const [isShow, setIsShow] = useState(false);

  // 연락처 숨기기
  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="w-full h-40 
                    flex justify-center items-start
                    max-w-screen-lg mx-auto">

      <div className='w-40 h-80'>
        <img src={data["구분"]==="광역지원센터" ? busan :
                  data["구분"]==="기초푸드마켓" ? bank : market} />
      </div>
      <div className='mx-5 flex flex-col justify-start items-start'>

        <div className='my-5'>
            <h1 className='text-2xl text-emerald-900 font-bold'>
                {data['사업장명']}
            </h1>
            <h2>{data['운영주체 분류']}</h2>
            <p>{data['사업장 소제지']}</p>
        </div>
        <div className='w-full p-2 h-10 bg-emerald-300
                        rounded-lg'
             onClick={handleShow}>
            {isShow &&
            <p>
                Tel. {data['연락처(대표번호)']}
            </p>
            }
        </div>

      </div>

    </div>
  )
}
