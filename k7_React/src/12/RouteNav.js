import ButtonC from '../UI/Button';
import { useNavigate } from "react-router-dom"

export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className='w-full my-5 grid grid-cols-3'>
      <ButtonC caption="Home" 
               bcolor="blue" 
               handleClick={() => {navigate('/')}} />
      <ButtonC caption="Page1" 
               bcolor="blue" 
               handleClick={() => {navigate('/p1/1')}} />
      <ButtonC caption="Page2" 
               bcolor="blue" 
               handleClick={() => {navigate('/p2')}} />
    </div>
  )
}
