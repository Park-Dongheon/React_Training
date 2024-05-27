// 컴포넌트의 계층적으로 생성 MyDiv() -> MyDiv2() -> MyDiv3()
import MyDiv2 from "./MyDiv2"

export default function MyDiv() {

  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';
  
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-400 w-2/3 h-2/3 p-5 m-10 text-2xl text-lime-200">

      <div className="flex justify-start font-bold w-full">{dname1}</div>
      
      {/* dn(속성) = {dname}(값) */}
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3}/>

    </div>
  )
}
