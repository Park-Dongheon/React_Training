import Button from "../UI/Button";
// import { useState } from "react";


export default function TrafficNav({title, c, sel, setSel}) {
  // const title = '중분류';
  // const c = ['차대사람', '차대차', '차량단독', '철길건널목'];
  // const c = ['횡단중', '차도통행중', '길가장자리구역통행중', '보도통행중', '기타'];
  // const [ sel, setSel] = useState()

  const cTag = c.map((item) => <Button key={item}
                                       caption={item}
                                       bcolor={sel === item ? 'orange' : 'blue'}
                                       handleClick={() => handleSelector(item)} />);

  // 버튼이 눌러진 경우
  // 버튼이 클릭되고 바뀌는 변수
  const handleSelector = (item) => {
    console.log(item)
    setSel(item)
  };


  return (
    <div className="w-full flex justify-start items-center my-5">

        <div className="w-1/5 flex justify-start items-center">
          교통사고 {title}
        </div>
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {cTag}
        </div>


    </div>
  )

}
