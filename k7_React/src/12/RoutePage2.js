import { useSearchParams, useLocation } from "react-router-dom"

export default function RoutePage2() {
  const fruits = ['🍎', '🍌', '🥕'];

  const loc = useLocation();
  console.log(loc.pathname, loc.search)

  const [sParams] = useSearchParams();
  console.log("sParams", sParams)
//   const item = sParams.get('item')


  let tm = [];
  sParams.forEach((item) => fruits.includes(item) ? tm.push(<li key={item}>{`${item} : 과일`}</li>)
                                                  : tm.push(<li key={item}>{`${item} : 과일 아님`}</li>));

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h1 className="w-full my-10
                       flex justify-center items-center
                       text-2xl font-bold">
            RoutePage2
        </h1>
        <div className="flex justify-center items-center
                        text-2xl font-bold">
            {/* {fruits.includes(item) ? `${item} : 과일입니다.`
                                    :`${item} : 과일이 아닙니다.`}*/}
            <ul>
                {tm}
            </ul>
        </div>
    </div>
  )
  
}
