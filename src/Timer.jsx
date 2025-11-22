import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if(count>0){
        const id = setInterval(() => {
            setCount(c => c -1);
        }, 1000);
        return () => {
          clearInterval(id);
        };
    }
    else{
        console.log("failed");
        
    }
  }, [count]);

  return (
    <>
      <h1>
        Counter: {count}
      </h1>
    </>
  );
}
