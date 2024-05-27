export default function FestivalCard({imgUrl, title, content, spTag}) {

    return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
 
            <img className="w-full" 
                //  src={imgUrl.replace('http://','https://')} 
                 src={imgUrl.includes('http:') ? imgUrl.replace('http:','https:') : imgUrl}
                 alt={title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-emerald-700 text-base">
                        {content}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-bloc px-3 py-1 mr-2 mb-2
                                   bg-emerald-200 rounded-full 
                                     text-sm font-semibold text-emerald-700 ">
                        {spTag}
                    </span>
                </div>

        </div>
    </div>
  )
}
