// rfce
import React, {useState} from 'react'

function CounterHook() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1)
  }
  
  const incrementCountTen = () => {
    for(let i = 0; i < 10; i++) {
      // setCount(count + 1) 誤り、useStateのカウントが呼び出されるため
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>カウント + </button>
      <button onClick={incrementCountTen}>カウント 10 + </button>
    </div>
  )
}

export default CounterHook
