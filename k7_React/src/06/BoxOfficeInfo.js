export default function BoxOfficeInfo({selMv}) {
  console.log("BoxOfficeInfo",selMv);
  return(
    <div className="w-11/12 h-10 
                    flex justify-center items-center 
                    bg-emerald-600 text-emerald-200 font-bold">
            [{selMv.movieCd}-{selMv.movieNm}] 
            개봉일 : {selMv.openDt} 
            (
                <span className={selMv.rankOldAndNew === "OLD" ? "text-slate-100"
                                                              : "text-yellow-200"}>
                    {selMv.rankOldAndNew}
                </span>
            )
    </div>
  )
}