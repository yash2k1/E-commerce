import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment } from './feature/CounterSlice';
import RoutesFile from './RoutesFile';
function App() {
const value=useSelector(state=>state.count.value);
const dispach=useDispatch();
console.log(value)
  return (
   <>
   <RoutesFile/>
   {/* <h1>{value}</h1> */}
   {/* <button onClick={()=>dispach(increment())}>increment</button> */}
   </>
  )
}

export default App
