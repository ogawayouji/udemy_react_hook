import React, {useState, useEffect, useRef} from 'react'

function Count_ref() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    // const interval = setInterval(() => {
      intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
      // clearInterval(interval)
    };
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>ストップ</button>
      {/* <button onClick={() => clearInterval(interval)}>ストップ</button> */}
    </div>
  )
}

export default Count_ref
