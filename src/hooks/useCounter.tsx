import { useState } from "react";


const useCounter = () => {
  
  const [count, setCount] = useState<number>(10);
  
  const increaseBy = (num:number) => {
    setCount(current => current + num);
  }
  const decreaseBy = (num:number) => setCount( count - num );
  
  return {
    count,
    increaseBy,
    decreaseBy
  }
}

export default useCounter
