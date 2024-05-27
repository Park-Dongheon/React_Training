export default function MyDiv3(probs) {
  return (
    <div className=' w-full h-full p-5 m-5 
                     flex flex-col justify-center items-center bg-emerald-200 text-2xls font-bold text-lime-800'>
      
      <div className="flex justify-start w-full"> {`${probs.dname1} > ${probs.dname2} > ${probs.dname3}`} </div>

    </div>
  )
}
