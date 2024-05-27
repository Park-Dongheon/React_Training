import ButtonC from "../UI/Button"

export default function RecoilDiv3({n, setN, n2}) {

  const handleUP = (() => {
    setN(n + 1)
  });

  const handleDown = (() => {
    setN(n - 1)
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
      </div>

    </div>
  )
}
