import ButtonC from "../UI/Button"
import { AtomN } from "./AtomN";
import { useRecoilState, useSetRecoilState } from "recoil";


export default function RecoilDiv3() {
  const [n, setN] = useRecoilState(AtomN);

  const handleUP = (() => {
    setN(n + 1)
  });

  const handleDown = (() => {
    setN(n - 1)
  });

  const handleSave = (() => {
    localStorage.setItem("n", n);
    
  });

  const handleDel = (() => {
    localStorage.removeItem("n");
    setN(0);
  });

  return (
    <div>
      <div>
        RecoilDiv3 : n = {n}
      </div>
      <div>
        <ButtonC caption="증가"
                 bcolor="blue"
                 handleClick={handleUP}/>
        <ButtonC caption="감소"
                 bcolor="blue"
                 handleClick={handleDown}/>
        <ButtonC caption="local 저장"
                 bcolor="blue"
                 handleClick={handleSave}/>                 
        <ButtonC caption="local 삭제"
                 bcolor="blue"
                 handleClick={handleDel}/>                 
      </div>

    </div>
  )
}
