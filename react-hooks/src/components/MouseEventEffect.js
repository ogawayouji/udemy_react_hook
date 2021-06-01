import React, { useState, useEffect } from 'react'

function MouseEventEffect() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', getMousePosition)
    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }
  }, []) // 初回実行時のみでいい
  return (
    <div>
      <ul>
        <li>x座標: {x}</li>
        <li>y座標: {y}</li>
      </ul>
    </div>
  )
}

export default MouseEventEffect
