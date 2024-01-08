import React, {useState, useEffect} from 'react'

const Counter = () => {
const [count, setCount] = useState(0);
useEffect(()=>{
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    setCount(initialCount + 0);
    localStorage.setItem('pageVisits', initialCount + 1);

}, []);

  return (
    <div>
      I have been visited {count} times
    </div>
  )
}

export default Counter
