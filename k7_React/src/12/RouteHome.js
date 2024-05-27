import { Link } from "react-router-dom";

export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full my-10
                       flex justify-center items-center
                       text-2xl font-bold">
        RouteHome
      </h1>
      <div className="w-1/2 grid grid-cols-2">
        <div className="w-full p-2 m-2
                        flex flex-col justify-center items-center
                        text-xl">
            <h2 className="w-full
                           flex justify-center items-center
                           text-xl font-bold bg-slate-100">Page1</h2>
            <ul>
                <li><Link to='/p1/🍎'>사과🍎</Link></li>
                <li><Link to='/p1/🍌'>바나나🍌</Link></li>
                <li><Link to='/p1/🥕'>당근🥕</Link></li>
            </ul>
        </div>
        <div className="w-full p-2 m-2
                        flex flex-col justify-center items-center
                        text-xl">
            <h2 className="w-full
                           flex justify-center items-center
                           text-xl font-bold bg-slate-100">Page2</h2>
            <ul>
                {/* <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
                <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
                <li><Link to='/p2?item=🥕'>당근🥕</Link></li> */}
                <li><Link to='/p2?item1=🍎&item2=🍌&item3=🥕&item4=🍉'>사과🍎바나나🍌당근🥕수박🍉</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
