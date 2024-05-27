import MyDiv3 from "./MyDiv3"

// 매개변수 probs - 컴포넌트 형태로 인자값을 받음
export default function MyDiv2(probs) {

  return (
    <div className='w-full h-full p-5 m-5 
                    flex flex-col justify-center items-center bg-emerald-400 text-2xl font-bold text-lime-700'>
      
      <div className="flex justify-start w-full">{`${probs.dn1} > ${probs.dn2}`} 
      </div>
      
      {/* dname3={probs.dn3} 안쓰지만 MyDiv3로 전달 */}
      <MyDiv3 dname1={probs.dn1} dname2={probs.dn2} dname3={probs.dn3} />

    </div>
  )
}

