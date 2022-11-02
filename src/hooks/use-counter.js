import { useEffect, useState } from "react";

const useCounter = (counterUpdateFn) =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(counterUpdateFn());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [counterUpdateFn]);

    return counter
}

export default useCounter