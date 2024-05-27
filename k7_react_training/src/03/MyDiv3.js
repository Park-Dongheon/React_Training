export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col justify-center items-center
                    w-2/3 h-2/3 p-5 m-10 bg-emerald-100
                    text-lime-600 text-2xl font-bold">

      <div className="flex justify-start w-full">
        {`${probs.dname1} > ${probs.dname2} > ${probs.dname3}`}
      </div>
      
    </div>
  )
}
