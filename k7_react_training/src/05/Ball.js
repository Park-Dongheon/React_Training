export default function Ball({n}) {
  
  const colorN = {
    'b0' : 'bg-orange-600',
    'b1' : 'bg-lime-600',
    'b2' : 'bg-sky-600',
    'b3' : 'bg-violet-600',
    'b4' : 'bg-rose-600',
  }

  return (
    <div className={`inline-flex 
                     justify-center items-center
                     w-16 h-16 mx-2 rounded-full
                     font-bold text-2xl text-slate-100
                     ${colorN['b'+Math.floor(n/10)]}`}>
      {n}
    </div>
  )
}
