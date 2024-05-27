export default function BoxOfficeInfo({selMv}) {
  console.log("BoxOfficeInfo : ", selMv)
  return (
    <div className="w-11/12 h-10 bg-emerald-700
                    flex justify-center items-center
                    text-slate-100 font-bold">

        [{selMv.movieCd} - {selMv.movieNm}]
        개봉일 : {selMv.openDt}
        (
            <span className={selMv.rankOldAndNew === "OLD" ? "text-slate-100" : "text-yellow-200"}>
                {selMv.rankOldAndNew}
            </span>
        )

    </div>
  )
}
