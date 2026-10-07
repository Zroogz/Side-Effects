import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    })

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter