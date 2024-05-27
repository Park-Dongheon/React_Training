import { AtomN, AtomN2 } from "./AtomN";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";

import RecoilDiv2 from "./RecoiDiv2";

export default function RecoilDiv1() {
  const [n, setN] = useRecoilState(AtomN);
  const n2 = useRecoilValue(AtomN2);

  // 컴포넌트가 처음 마운트될 때 'localStorage'에서 값을 가져와 Recoli 상태 'n'을 초기화
  useEffect(() => {
    if(!parseInt(localStorage.getItem("n"))) return;
    setN(parseInt(localStorage.getItem("n")))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center
                    text-2xl font-bold">
      <div>
        RecoilDiv1 : n = {n}  n2 = {n2}
      </div>
      <RecoilDiv2 />
    </div>
  )
}
