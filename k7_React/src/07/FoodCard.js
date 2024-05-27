import bank from './fooddata/img/bank.png';
import busan from './fooddata/img/busan.png';
import market from './fooddata/img/market.png';
import { useState } from "react";


export default function FoodCard({ data }) {

  const [isShow, setIsShow] = useState(false);
  //   const [image, setImage] = useState();

  const handleShow = () => {
    setIsShow(!isShow);
  }

  return (
    <div className='flex w-full h-full
                    justify-start items-start'>
      <div>
        <img src={data["구분"] === "광역지원센터" ? busan :
          data["구분"] === "기초푸드마켓" ? bank : market} />
      </div>
      <div className='w-full h-full mx-2
                        flex flex-col justify-start items-start'>

        <h1 className='h-1rem text-lg text-emerald-700 font-bold'>
          {data['사업장명']}
        </h1>
        <h2 className='h-1rem text-base text-emerald-600 font-bold'>
          {data['운영주체 분류']}
        </h2>
        <span className='h-10 text-sm text-emerald-500 font-bold'>
          {data['사업장 소재지']}
        </span>
        <div className='w-full h-5 mt-3
                        flex justify-start items-center
                      bg-emerald-400'
          onClick={handleShow}>
          {isShow &&
            <p className='w-full text-xs text-slate-100 font-bold'>
              Tel. {data['연락처(대표번호)']}
            </p>
          }
        </div>
      </div>
    </div>
  )
}   
