import { useState } from "react"

const Counter = () => {
  
  const [count, setCount] = useState<number>(10);
  
  const increaseBy = (num:number) => {
    setCount(current => current + num);
  }
  const decreaseBy = (num:number) => setCount( count - num );

  return (
    <>
        <h3 className="text-2xl">Counter: <small className="font-bold">{count}</small></h3>

        <div>
            <button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-amber-50 hover:bg-blue-400" onClick={() => increaseBy(1)}>+1</button>
            <button className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-amber-50 hover:bg-blue-400" onClick={() => decreaseBy(1)} >-1</button>
        </div>
    </>
  )
}

export default Counter
