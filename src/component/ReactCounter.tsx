import { useState } from 'react'

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h2>React Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
