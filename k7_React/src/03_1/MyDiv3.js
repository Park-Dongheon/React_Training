export default function MyDiv3(probs) {
  return (
    <div className='flex flex-col justify-center items-center bg-emerald-100 w-2/3 h-2/3 p-5 m-10 text-2xls font-bold text-lime-700'>
      
      <div className="flex justify-start w-full">{`${probs.dname1} > ${probs.dname2} > ${probs.dname3}`} </div>

    </div>
  )
}
