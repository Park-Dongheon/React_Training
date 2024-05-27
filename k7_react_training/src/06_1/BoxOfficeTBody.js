import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export default function BoxOfficeTBody({dailyList, setSelMv}) {
  // console.log(dailyList);
  // 콜백함수 형태로 매개변수를 인자값으로 전달
  const handleMvSelect = (mv) => {
    // console.log("handleMvSelect : ", mv);
    setSelMv(mv)
  };
  // <tr>을 10개 그림,tr 부분이 선택이 되면 item 전달
  const tags = dailyList.map(item =>
    <tr key={item.movieCd}
        onClick={() => {handleMvSelect(item)}}
        className="border-b border-emerald-300
                    duration-300 hover:bg-emearld-100"> 
      <td className="px-6 py-2 font-medium
                        whitespace-nowrap">
                        {item.rank}
      </td>
      <td className="px-6 py-2 font-medium
                        whitespace-nowrap">
                        {item.movieNm}
      </td>
      <td className="px-6 py-2 font-medium
                        whitespace-nowrap
                        text-right">
                        {parseInt(item.salesAcc).toLocaleString()} 원
      </td>
      <td className="px-6 py-2 font-medium
                        whitespace-nowrap
                        text-right">
                        {parseInt(item.audiAcc).toLocaleString()} 명
      </td>
      <td className="px-6 py-2 font-medium
                        flex justify-center items-center
                        text-right">
          <span>
              {item.rankInten > 0 ? <AiFillCaretUp className="text-red-600"/> :
                item.rankInten < 0 ? <AiFillCaretDown className="text-blue-600"/> :
                '-'}
          </span>
          <span>
            {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)}
          </span>
      </td>
    </tr>
    );

  return (
    <tbody>
      {tags}
    </tbody>
  )
}
